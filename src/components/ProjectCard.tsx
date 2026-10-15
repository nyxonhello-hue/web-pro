import Link from "next/link";
import type { Project } from "@/data/content";
import { galleryImages, resolveDownload, websiteScreenshot } from "@/lib/assets";
import ProjectVisual from "./ProjectVisual";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const download = resolveDownload(project);
  const firstShot = galleryImages(project)[0];
  return (
    <article className={`project reveal${index % 2 === 1 ? " flip" : ""}`} aria-labelledby={`p-${project.slug}`}>
      <ProjectVisual kind={project.visual} screenshot={websiteScreenshot(project)} image={firstShot} />
      <div className="project-body">
        <div className="project-meta">
          <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-cat">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 id={`p-${project.slug}`}>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="cta-row">
          <Link className="btn btn-primary" href={`/projects/${project.slug}`}>
            View case study
          </Link>
          {project.liveUrl && (
            <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
      </div>
    </article>
  );
}
