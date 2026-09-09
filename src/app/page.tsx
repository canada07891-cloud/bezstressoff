import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import HeroCta from "@/components/HeroCta";
import { BASE_PATH } from "@/lib/site";

const CONCEPT_CARDS = [
  {
    href: "/concept",
    photo: `${BASE_PATH}/assets/concept-about-me.jpg`,
    alt: "Марина Сидорова",
    title: "Обо мне",
    text: "Марина Сидорова — клинический психолог, психотерапевт, к.п.н. В профессии с 2000 года.",
    linkLabel: "Подробнее →",
  },
  {
    href: "/services#individual",
    photo: `${BASE_PATH}/assets/concept-individual.jpg`,
    alt: "Индивидуальная консультация",
    title: "Индивидуальная консультация",
    text: "Онлайн/офлайн. Работа с тяжелыми эмоциональными состояниями и травматическими событиями, изменение стратегий поведения и взглядов на жизнь.",
    linkLabel: "Подробнее →",
  },
  {
    href: "/services#group",
    photo: `${BASE_PATH}/assets/concept-group.jpg`,
    alt: "Групповая работа",
    title: "Групповая работа",
    text: "Безопасное пространство для самоисследования, выхода из шаблонов поведения, поддержки и развития.",
    linkLabel: "Подробнее →",
  },
  {
    href: "/#contacts",
    photo: `${BASE_PATH}/assets/concept-supervision.jpg`,
    alt: "Супервизия",
    title: "Супервизия",
    text: "Профессиональная работа со специалистами, обучение и сопровождение.",
    linkLabel: "Записаться →",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <span className="hero__blob hero__blob--1" />
          <span className="hero__blob hero__blob--2" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              <span className="hero__eyebrow">Психологическое пространство</span>
              <h1 className="hero__title">
                Дарю вам крылья<br />для <em>вашей мечты</em>
              </h1>
              <p className="hero__text">
                Наш внутренний потенциал безграничен — это бесценный дар, который следует открыть в себе
                и начать использовать для достижения счастья и успеха.
              </p>
              <div className="hero__cta">
                <HeroCta />
                <a href="#intro" className="btn btn--secondary btn--large">Обо мне и работе</a>
              </div>
              <div className="hero__scroll" aria-hidden="true">
                <span>Листайте вниз</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="hero__photo-wrap">
              <Image
                src={`${BASE_PATH}/assets/concept-about-me.jpg`}
                alt="Марина Сидорова"
                width={480}
                height={600}
                priority
                className="hero__photo"
              />
              <div className="hero__caption">
                <strong>Марина Сидорова</strong>
                <span>Клинический психолог, психотерапевт</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="concept" id="intro">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">bezstressoff.ru</span>
            <h2 className="section-title">Приветствую вас в пространстве bezstressoff.ru!</h2>
            <p>Кратко обо мне и о работе</p>
          </div>

          <div className="concept__grid">
            {CONCEPT_CARDS.map((card, i) => (
              <Reveal as="article" className="concept-card" delay={i * 0.08} key={card.title}>
                <Image src={card.photo} alt={card.alt} width={360} height={480} className="concept-card__photo" />
                <div className="concept-card__body">
                  <h3 className="concept-card__title">{card.title}</h3>
                  <p className="concept-card__text">{card.text}</p>
                  <Link href={card.href} className="concept-card__link">{card.linkLabel}</Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="concept__cta">
            <Link href="/concept" className="btn btn--primary btn--large">Узнать больше</Link>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="contacts" id="contacts">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">На связи</span>
            <h2 className="section-title">Контакты</h2>
          </div>

          <div className="contacts__grid">
            <div className="contacts__info">
              <Reveal as="div" className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h4>Адрес</h4>
                  <p>Москва, ул. Кравченко, д. 11</p>
                </div>
              </Reveal>

              <Reveal as="div" className="contact-item" delay={0.08}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h4>Телефон</h4>
                  <p><a href="tel:+79773768610">+7 (977) 376-86-10</a></p>
                </div>
              </Reveal>

              <Reveal as="div" className="contact-item" delay={0.16}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:bezstressoff@gmail.com">bezstressoff@gmail.com</a></p>
                </div>
              </Reveal>

              <Reveal as="div" className="contact-item" delay={0.24}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div>
                  <h4>Instagram</h4>
                  <p><a href="https://www.instagram.com/psybreakfast" target="_blank" rel="noopener noreferrer">@psybreakfast</a></p>
                </div>
              </Reveal>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
