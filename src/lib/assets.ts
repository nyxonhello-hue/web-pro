import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/data/content";

/** True if a file exists under /public (checked at build time, so missing files never produce dead links). */
export function publicFileExists(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

const EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

/**
 * Real app screenshots named `<prefix>-1.png`, `<prefix>-2.jpg`, ... (png, jpg, jpeg or webp) inside
 * the project's gallery folder. Only files that actually exist are returned.
 */
export function galleryImages(project: Project): { src: string; alt: string }[] {
  if (!project.gallery) return [];
  const { dir, prefix } = project.gallery;
  const found: { src: string; alt: string }[] = [];
  for (let n = 1; n <= 12; n++) {
    const src = EXTENSIONS.map((ext) => `${dir}/${prefix}-${n}.${ext}`).find(publicFileExists);
    if (src) found.push({ src, alt: `${project.title} screenshot ${n}` });
  }
  return found;
}

/** A website screenshot is used only if its file exists; otherwise the labelled sketch is shown. */
export function websiteScreenshot(project: Project): Project["screenshot"] | undefined {
  const s = project.screenshot;
  return s && publicFileExists(s.src) ? s : undefined;
}

/** A download button is only shown when its file exists (local path) or it is an external URL. */
export function resolveDownload(project: Project): { href: string; label: string } | null {
  const d = project.download;
  if (!d) return null;
  if (/^https?:\/\//.test(d.href)) return d;
  return publicFileExists(d.href) ? d : null;
}
