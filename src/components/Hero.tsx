import Avatar from "./Avatar";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="lead">{hero.description}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a className="btn btn-ghost" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-photo"
            src="/images/minato.jpg"
            alt="Portrait of Minato, founder of NYXON"
            width={900}
            height={700}
          />
          <span className="hero-tag" aria-hidden="true">
            NYXON · Ghana
          </span>
        </div>
      </div>
    </section>
  );
}
