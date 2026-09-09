import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/site";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image-optimization endpoint (static hosting only).
    unoptimized: true,
  },
};

export default nextConfig;
