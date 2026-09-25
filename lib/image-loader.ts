// Static-export image loader for cPanel: serves pre-built WebP files from /images/opt
// (generated at 480, 960 and 1600px wide) instead of Vercel's on-demand optimizer.
const WIDTHS = [480, 960, 1600];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = src.match(/^\/images\/([^/]+)\.(jpe?g|webp)$/);
  if (!match) return src;
  const w = WIDTHS.find(x => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `/images/opt/${match[1]}-${w}.webp`;
}
