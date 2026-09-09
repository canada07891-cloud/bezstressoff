"use client";

import { useFormSubmit } from "@/lib/useFormSubmit";

export default function ContactForm() {
  const { status, handleSubmit } = useFormSubmit();

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Записаться на консультацию</h3>
      <div className="form-group">
        <label htmlFor="name">Ваше имя</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефон</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Сообщение</label>
        <textarea id="message" name="message" rows={4} />
      </div>
      <button type="submit" className="btn btn--primary btn--large" disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : "Отправить"}
      </button>
      {status === "success" && <p className="form-status form-status--success">Спасибо! Сообщение отправлено, я скоро свяжусь с вами.</p>}
      {status === "error" && <p className="form-status form-status--error">Заполните имя и телефон или позвоните напрямую.</p>}
    </form>
  );
}
