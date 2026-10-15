import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/ProjectVisual";
import StatusBadge from "@/components/StatusBadge";
import { projects } from "@/data/content";
import { galleryImages, resolveDownload, websiteScreenshot } from "@/lib/assets";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, url: `/projects/${project.slug}` },
  };
}

function Block({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className="cs-block">
      <h2>{title}</h2>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const cs = project.caseStudy;
  const download = resolveDownload(project);
  const shots = galleryImages(project);

  return (
    <article className="container case-study">
      <Link href="/#work" className="back-link">
        ← All work
      </Link>
      <header className="cs-head">
        <div className="project-meta">
          <span className="project-cat">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="cta-row">
          {project.liveUrl && (
            <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.liveLabel ?? "Visit Live Site"}
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          )}
          {download && (
            <a className="btn btn-ghost" href={download.href} download>
              {download.label}
              <span aria-hidden="true"> ↓</span>
            </a>
          )}
          {project.repoUrl ? (
            <a className="btn btn-ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Source code
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : project.repoComingSoon ? (
            <span className="btn btn-disabled" aria-disabled="true">
              Source link coming soon
            </span>
          ) : null}
        </div>
      </header>

      {shots.length > 0 ? (
        <section className="cs-block" aria-label="Screenshots">
          <h2>Screenshots</h2>
          <ul className="gallery">
            {shots.map((s) => (
              <li key={s.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div className="cs-visual">
          <ProjectVisual kind={project.visual} screenshot={websiteScreenshot(project)} />
        </div>
      )}

      <div className="cs-body">
        <section className="cs-block">
          <h2>The problem</h2>
          <p>{cs.problem}</p>
        </section>
        <section className="cs-block">
          <h2>My contribution</h2>
          <p>{cs.contribution}</p>
        </section>
        <Block title="Implementation" items={cs.implementation} />
        <Block title="Verified features" items={project.verified} />
        <Block title="Technical decisions" items={cs.decisions} />
        <Block title="Challenges" items={cs.challenges} />
        <Block title="Lessons learned" items={cs.lessons} />
        {project.planned && <Block title="Planned or still being confirmed" items={project.planned} />}
      </div>

      <nav className="cs-next" aria-label="More projects">
        <Link href={`/projects/${prev.slug}`} rel="prev">
          <span>Previous project</span>
          ← {prev.title}
        </Link>
        <Link href={`/projects/${next.slug}`} rel="next" className="cs-next-right">
          <span>Next project</span>
          {next.title} →
        </Link>
      </nav>
    </article>
  );
}
