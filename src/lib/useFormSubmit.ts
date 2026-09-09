"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error" | "not-configured";

// Set via a GitHub Actions repo variable (FORMSPREE_ENDPOINT) baked in at
// build time — see README. Looks like https://formspree.io/f/xxxxxxxx
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function useFormSubmit(onSuccess?: () => void) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("phone")) {
      setStatus("error");
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus("not-configured");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
