"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const POSTS = [
  "https://www.instagram.com/psybreakfast/p/Dc_iJdHsQIF/",
  "https://www.instagram.com/psybreakfast/p/DcyJ7RVsp7q/",
  "https://www.instagram.com/psybreakfast/p/DcoIKo7sz93/",
];

export default function InstagramFeed() {
  useEffect(() => {
    // If the embed script already ran (client-side navigation back to this
    // page), ask it to hydrate the freshly-mounted blockquotes.
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <>
      <div className="ig-embed-grid">
        {POSTS.map((url) => (
          <div className="ig-card" key={url}>
            <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Смотреть пост в Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}
