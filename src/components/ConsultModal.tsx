"use client";

import { useModal } from "./ModalContext";
import { useFormSubmit } from "@/lib/useFormSubmit";

export default function ConsultModal() {
  const { isOpen, closeModal } = useModal();
  const { status, handleSubmit } = useFormSubmit(() => {
    setTimeout(closeModal, 1500);
  });

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={closeModal} />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal__content">
          <button className="modal__close" aria-label="Закрыть" onClick={closeModal}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h2 id="modalTitle">Запись на консультацию</h2>
          <p>Заполните форму, и я свяжусь с вами в ближайшее время</p>
          <form className="modal__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="modal-name">Ваше имя *</label>
              <input type="text" id="modal-name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="modal-phone">Телефон *</label>
              <input type="tel" id="modal-phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="modal-email">Email</label>
              <input type="email" id="modal-email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="modal-message">Комментарий</label>
              <textarea id="modal-message" name="message" rows={3} />
            </div>
            <button type="submit" className="btn btn--primary btn--large" disabled={status === "loading"}>
              {status === "loading" ? "Отправка..." : "Отправить заявку"}
            </button>
            {status === "success" && <p className="form-status form-status--success">Спасибо! Заявка отправлена, я свяжусь с вами в ближайшее время.</p>}
            {status === "error" && <p className="form-status form-status--error">Проверьте поля или попробуйте позвонить напрямую.</p>}
            {status === "not-configured" && <p className="form-status form-status--error">Форма временно не настроена — позвоните, пожалуйста, напрямую: +7 (977) 376-86-10.</p>}
          </form>
        </div>
      </div>
    </>
  );
}
