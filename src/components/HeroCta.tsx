"use client";

import { useModal } from "./ModalContext";

export default function HeroCta() {
  const { openModal } = useModal();
  return (
    <button className="btn btn--primary btn--large" onClick={openModal}>
      Записаться на консультацию
    </button>
  );
}
