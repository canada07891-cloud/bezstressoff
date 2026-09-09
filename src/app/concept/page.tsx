import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { BASE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Концепция",
  description:
    "Концепция психологического пространства bezstressoff.ru: моя миссия, ценности и подход к работе. Марина Сидорова — клинический психолог, психотерапевт.",
};

export default function ConceptPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Как я работаю</span>
          <h1>Концепция</h1>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about__section about__section--intro">
            <div className="about__intro-layout">
              <Image
                src={`${BASE_PATH}/assets/concept-about-me.jpg`}
                alt="Марина Сидорова"
                width={360}
                height={480}
                className="about__intro-photo"
              />
              <div>
                <span className="about__index">01</span>
                <h2>Моя миссия</h2>
                <p>
                  Психологическое пространство bezstressoff.ru я создала для того, чтобы помочь людям обрести внутреннюю
                  гармонию, преодолеть жизненные трудности и раскрыть свой потенциал. Я верю, что каждый человек обладает
                  уникальными способностями и ресурсами для достижения счастья и успеха.
                </p>
                <p>
                  Моя цель — создать безопасное пространство, где вы сможете исследовать свои чувства, мысли и
                  поведение, получить профессиональную поддержку и научиться эффективным способам справляться с
                  жизненными вызовами.
                </p>
              </div>
            </div>
          </div>

          <div className="about__section">
            <span className="about__index">02</span>
            <h2>Мои ценности</h2>
            <div className="about__values">
              <div className="value-card">
                <div className="value-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 10 12 5 2 10l10 5 10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Профессионализм</h3>
                <p>
                  Высшее психологическое образование, регулярное повышение квалификации и супервизия —
                  основа моей качественной работы.
                </p>
              </div>
              <div className="value-card">
                <div className="value-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Конфиденциальность</h3>
                <p>
                  Я гарантирую полную конфиденциальность всей информации, которой вы делитесь
                  на консультациях.
                </p>
              </div>
              <div className="value-card">
                <div className="value-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h3>Индивидуальный подход</h3>
                <p>
                  Каждый клиент уникален, поэтому я подбираю методы работы с учетом ваших
                  особенностей и запросов.
                </p>
              </div>
              <div className="value-card">
                <div className="value-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.5s-7.5-4.6-9.5-9C1.1 8.2 2.6 5 6 5c2 0 3.3 1 4 2.2C10.7 6 12 5 14 5c3.4 0 4.9 3.2 3.5 6.5-2 4.4-9.5 9-9.5 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Уважение</h3>
                <p>
                  Я с уважением отношусь к вашим ценностям, убеждениям и выбору, создавая
                  атмосферу принятия и поддержки.
                </p>
              </div>
            </div>
          </div>

          <div className="about__section">
            <span className="about__index">03</span>
            <h2>Мой подход</h2>
            <p>
              В работе я использую интегративный подход, сочетающий различные психотерапевтические
              методы и техники. Это позволяет мне эффективно работать с широким спектром запросов —
              от личных проблем до семейных и бизнес-консультаций.
            </p>
            <h3>Я специализируюсь на:</h3>
            <p>
              • Индивидуальной психотерапии и консультировании<br />
              • Семейной и парной терапии<br />
              • Групповых программах и тренингах<br />
              • Коучинге для личностного и бизнес-развития<br />
              • Работе с психосоматическими расстройствами<br />
              • Программах антистресса и релаксации
            </p>
          </div>

          <div className="about__section">
            <span className="about__index">04</span>
            <h2>Как я работаю</h2>
            <p>
              Первая консультация — это знакомство, где вы сможете рассказать о своем запросе,
              а я — о методах работы и возможных путях решения вашей задачи. Мы обсудим
              формат работы, частоту встреч и примерную длительность терапии.
            </p>
            <p>
              Дальнейшая работа строится индивидуально: это могут быть регулярные еженедельные сессии,
              групповые занятия или интенсивные программы. Главное — это ваш комфорт и готовность
              к изменениям.
            </p>

            <div className="about__location">
              <h3>Контакты</h3>
              <div className="contact-info">
                <div className="contact-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span><strong>Адрес:</strong> Москва, ул. Кравченко, д. 11</span>
                </div>
                <div className="contact-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span><strong>Телефон:</strong> <a href="tel:+79773768610">+7 (977) 376-86-10</a></span>
                </div>
                <div className="contact-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span><strong>Email:</strong> <a href="mailto:bezstressoff@gmail.com">bezstressoff@gmail.com</a></span>
                </div>
                <div className="contact-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span><strong>Instagram:</strong> <a href="https://www.instagram.com/psybreakfast" target="_blank" rel="noopener noreferrer">@psybreakfast</a></span>
                </div>
                <div className="contact-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span><strong>Режим работы:</strong> Ежедневно с 10:00 до 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
