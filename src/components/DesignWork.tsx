"use client";

import { useRef } from "react";
import { posterProject as p } from "@/data/design-work";
import "./poster.css";

/**
 * Project card + details modal for a visual (design) portfolio piece.
 * Uses the native <dialog> element, so focus is trapped, Escape closes it, and the page behind is inert.
 */
export default function DesignWork({ index }: { index: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = () => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <article className={`project reveal${index % 2 === 1 ? " flip" : ""}`} aria-labelledby="p-nyxon-tech-services">
      <figure className="dw-visual">
        <button type="button" className="dw-open" onClick={open} aria-haspopup="dialog">
          {/* Original file, served as-is: no resizing or re-encoding. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            loading="lazy"
            decoding="async"
          />
          <span className="dw-chip" aria-hidden="true">
            View larger
          </span>
          <span className="sr-only">Open the poster and project details</span>
        </button>
        <figcaption>Promotional poster · design piece</figcaption>
      </figure>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-cat">{p.category}</span>
          <span className="badge tone-done">
            <span className="dot" aria-hidden="true" />
            {p.badge}
          </span>
        </div>
        <h3 id="p-nyxon-tech-services">{p.title}</h3>
        <p className="dw-sub">{p.subtitle}</p>
        <p>{p.summary}</p>
        <ul className="tags" aria-label="Skills">
          {p.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="dw-note">{p.note}</p>
        <div className="cta-row">
          <button type="button" className="btn btn-primary" onClick={open} aria-haspopup="dialog">
            View project details
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="dw-modal"
        aria-labelledby="dw-modal-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) close(); // click on the backdrop
        }}
        onClose={() => triggerRef.current?.focus()}
      >
        <div className="dw-modal-head">
          <h2 id="dw-modal-title">
            {p.title} <span>— {p.subtitle}</span>
          </h2>
          <button type="button" className="dw-close btn btn-ghost" onClick={close}>
            <span aria-hidden="true">✕ </span>Close
          </button>
        </div>

        <div className="dw-modal-body">
          <div className="dw-modal-poster">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} loading="lazy" decoding="async" />
            <a className="dw-full" href={p.image.src} target="_blank" rel="noopener noreferrer">
              Open full-size image
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>

          <div className="dw-details">
            <section>
              <h3>Overview</h3>
              <p>{p.overview}</p>
              <p className="dw-note">{p.note}</p>
            </section>
            <section>
              <h3>Design goals</h3>
              <ul>
                {p.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Services featured in the advertisement</h3>
              <ul className="dw-services">
                {p.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Design decisions</h3>
              <dl>
                {p.decisions.map((d) => (
                  <div key={d.title}>
                    <dt>{d.title}</dt>
                    <dd>{d.text}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section>
              <h3>Skills</h3>
              <ul className="tags">
                {p.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </dialog>
    </article>
  );
}
