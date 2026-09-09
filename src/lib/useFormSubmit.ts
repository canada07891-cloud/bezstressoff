"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function useFormSubmit(onSuccess?: () => void) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!data.name || !data.phone) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/form.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as Record<string, string>),
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
