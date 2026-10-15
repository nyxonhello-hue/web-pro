import Link from "next/link";
import DesignWork from "./DesignWork";
import {
  about,
  contact,
  lab,
  process,
  projects,
  site,
  skills,
} from "@/data/content";
import ProjectCard from "./ProjectCard";
import StatusBadge from "./StatusBadge";
import Wordmark from "./Wordmark";

function SectionHead({ id, kicker, title, intro }: { id: string; kicker: string; title: string; intro?: string }) {
  return (
    <header className="section-head reveal">
      <p className="eyebrow">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </header>
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 id="about-title">{about.heading}</h2>
        </div>
        <div className="reveal">
          {about.paragraphs.map((p) => (
            <p key={p} className="body-copy">
              {p}
            </p>
          ))}
          <ul className="highlights">
            {about.highlights.map((h, i) => (
              <li key={h}>
                <span className="hl-num">{String(i + 1).padStart(2, "0")}</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          id="work-title"
          kicker="Selected work"
          title="Products and projects I've built"
          intro="Each project shows its real status. Open a case study for what was built, the decisions behind it, and what is still planned."
        />
        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
          <DesignWork index={projects.length} />   {/* add this line */}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead id="skills-title" kicker="Skills" title="Technologies I work with" />
        <div className="skills-grid">
          {skills.map((g) => (
            <div key={g.group} className="skill-card reveal">
              <h3>{g.group}</h3>
              <ul className="tags">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionHead id="process-title" kicker="Process" title="How I turn an idea into software" />
        <ol className="process-grid">
          {process.map((s) => (
            <li key={s.n} className="process-step reveal">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Lab() {
  return (
    <section id="lab" className="section" aria-labelledby="lab-title">
      <div className="container">
        <SectionHead
          id="lab-title"
          kicker="Experiments & Lab"
          title="Work in progress and ideas"
          intro="Earlier-stage projects, labelled honestly. Concepts are ideas I'm exploring, not finished software."
        />
        <div className="lab-grid">
          {lab.map((item) => (
            <article key={item.title} className="lab-card reveal">
              <div className="lab-top">
                <span className="project-cat">{item.type}</span>
                <StatusBadge status={item.status} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="tags">
                {item.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-card reveal">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">{contact.heading}</h2>
        <p className="lead">{contact.description}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            Email Minato
          </a>
          <a className="btn btn-ghost" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub profile
            <span className="sr-only"> (opens in a new tab)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
        <p className="contact-line">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" aria-label="NYXON, home">
          <Wordmark size={22} />
        </Link>
        <p>© 2026 {site.name} · {site.brand}. Built in {site.location}.</p>
        <ul>
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
