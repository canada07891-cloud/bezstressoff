import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "Полезная информация",
  description: "Полезная информация от психологического пространства bezstressoff.ru: статьи, материалы и анонсы мероприятий.",
};

export default function InfoPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Материалы</span>
          <h1>Полезная информация</h1>
          <p>Статьи и материалы по психологии, а также анонсы предстоящих мероприятий</p>
        </div>
      </section>

      <div className="info-jump">
        <a href="#posts">Статьи</a>
        <a href="#events">Мероприятия</a>
      </div>

      <section className="info-section" id="posts">
        <div className="container">
          <div className="info-section__head">
            <h2>Статьи</h2>
            <p>Полноценные статьи на сайте появятся скоро. А пока — свежие посты прямо из Instagram</p>
          </div>

          {/*
            Live posts pulled from instagram.com/psybreakfast via Meta's official
            embed (no API key needed). To feature a new post: open it on Instagram →
            "..." → "Embed" → add its permalink to POSTS in InstagramFeed.tsx.
          */}
          <InstagramFeed />

          <div className="concept__cta">
            <a href="https://www.instagram.com/psybreakfast" className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
              Все посты в Instagram →
            </a>
          </div>
        </div>
      </section>

      <section className="info-section" id="events">
        <div className="container">
          <div className="info-section__head">
            <h2>Мероприятия</h2>
            <p>Анонсы и фотографии с программ</p>
          </div>

          <div className="info-grid">
            <div className="empty-state">
              <svg className="empty-state__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p>Ближайшие мероприятия пока не запланированы. Анонсы и фото с программ появятся здесь.</p>
              <Link href="/#contacts" className="btn btn--secondary">Узнать о новых датах</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
