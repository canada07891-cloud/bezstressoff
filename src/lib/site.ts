// bezstressoff.ru is a custom domain (public/CNAME) served from the root —
// no basePath needed. This only kicks back in if the site is ever served
// from a GitHub Pages project path again (NEXT_PUBLIC_GITHUB_PAGES=true).
export const REPO_NAME = "bezstressoff";
export const BASE_PATH = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? `/${REPO_NAME}` : "";

export const SITE_URL = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true"
  ? `https://canada07891-cloud.github.io/${REPO_NAME}`
  : "https://bezstressoff.ru";
