import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import { Footer } from "@/components/Sections";
import { site } from "@/data/content";
import { siteUrl } from "@/lib/site-url";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  jobTitle: "Software developer",
  brand: { "@type": "Brand", name: site.brand },
  homeLocation: { "@type": "Country", name: site.location },
  sameAs: [site.github],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: { default: site.title, template: `%s · ${site.brand}` },
  description: site.description,
  applicationName: `${site.brand} Portfolio`,
  authors: [{ name: site.name, url: site.github }],
  keywords: ["Minato", "NYXON", "software developer", "Ghana", "Flutter", "Python", "desktop apps", "portfolio"],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    siteName: `${site.brand} · ${site.name}`,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080b12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
