import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import InstagramFeed from "@/components/InstagramFeed";
import EventSchedule from "@/components/EventSchedule";

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
            <p>Статьи на сайте появятся скоро</p>
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
            <p>Программа «Дом моей души» — 1–4 октября 2026</p>
          </div>

          <EventSchedule />

          <div className="concept__cta">
            <Link href="/#contacts" className="btn btn--secondary">Записаться и уточнить детали</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
