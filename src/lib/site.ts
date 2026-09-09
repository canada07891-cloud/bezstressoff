// GitHub Pages serves project sites from /<repo-name>/, not the domain root.
// This is only applied when the GitHub Actions workflow builds with
// NEXT_PUBLIC_GITHUB_PAGES=true — local dev and any future custom-domain/
// Vercel build stay unprefixed.
//
// Must be NEXT_PUBLIC_-prefixed: BASE_PATH is read both at build time (server
// render, next.config.ts) AND inside client components (e.g. CtaBand's
// inline background-image) — a plain, unprefixed env var reads as undefined
// once it's evaluated in the browser bundle after hydration.
export const REPO_NAME = "bezstressoff";
export const BASE_PATH = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? `/${REPO_NAME}` : "";

// TODO: swap for "https://bezstressoff.ru" once the custom domain is wired
// up to GitHub Pages (add public/CNAME + DNS records, then drop BASE_PATH).
export const SITE_URL = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true"
  ? `https://canada07891-cloud.github.io/${REPO_NAME}`
  : "https://bezstressoff.ru";
