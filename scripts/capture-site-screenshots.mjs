// Captures REAL screenshots of your live websites into public/screenshots/.
// Run this on your own computer (the build sandbox cannot reach these sites):
//
//   npm i --no-save playwright
//   npx playwright install chromium
//   node scripts/capture-site-screenshots.mjs
//
// These are screenshots of the websites only. Screenshots of the desktop and mobile apps themselves
// (WCA, Nyxon Shield, Launcher, Incognito Guard, StudyNyx) must be taken from the apps and saved as
// public/screenshots/<prefix>-1.png, -2.png, ... (see README).

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const targets = [
  { url: "https://shira-import.vercel.app/", file: "shira-import.jpg" },
  { url: "https://incognito-guard.vercel.app/", file: "incognito-guard-site.jpg" },
  { url: "https://nyxon-web.vercel.app/", file: "nyxon-launcher-site.jpg" },
];

mkdirSync("public/screenshots", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const t of targets) {
  try {
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500); // let entrance animations settle
    await page.screenshot({ path: `public/screenshots/${t.file}`, type: "jpeg", quality: 82 });
    console.log("saved", t.file);
  } catch (err) {
    console.error("FAILED", t.url, err.message);
  }
}

await browser.close();
