"use client";

import { useModal } from "./ModalContext";

export default function CtaBand({
  title = "Готовы начать работу?",
  text = "Запишитесь на консультацию",
}: {
  title?: string;
  text?: string;
}) {
  const { openModal } = useModal();
  return (
    <section className="cta-band">
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
