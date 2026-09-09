"use client";

import { useModal } from "./ModalContext";
import { BASE_PATH } from "@/lib/site";

export default function CtaBand({
  title = "Готовы начать работу?",
  text = "Запишитесь на консультацию",
}: {
  title?: string;
  text?: string;
}) {
  const { openModal } = useModal();
  return (
    <section
      className="cta-band"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 17, 15, .5), rgba(20, 17, 15, .75)), url(${BASE_PATH}/assets/bsbg-K7TW8f5a.png)`,
      }}
    >
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn btn--primary btn--large" onClick={openModal}>
          Записаться на консультацию
        </button>
      </div>
    </section>
  );
}
