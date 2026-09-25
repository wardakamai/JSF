import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into ./out for upload to cPanel (public_html).
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 960, 1600],
    imageSizes: [240],
  },
};

export default nextConfig;
