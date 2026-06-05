import { projects, type Project } from "@/lib/content";
import Reveal from "./Reveal";

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function hasLink(url: string): boolean {
  return Boolean(url && !url.startsWith("[insert"));
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const hasImage = Boolean(p.image && !String(p.image).startsWith("[insert"));
  const reverse = index % 2 === 1;
  const validRepos = p.repos.filter((r) => hasLink(r.url));

  return (
    <Reveal>
      <article className={reverse ? "project reverse" : "project"}>

        {/* Info side */}
        <div className={hasImage ? "project-info" : "project-info project-info-full"}>

          {/* Category label */}
          <p className="project-category">{p.category}</p>

          <div className="project-head">
            <h3 className="project-title">{p.title}</h3>
            <span className="project-year">{p.year}</span>
          </div>

          <p className="project-tagline">{p.tagline}</p>

          {p.showMeta && p.problem ? (
            <div className="project-detail">
              <span className="k">Problem</span>
              <span className="v muted">{p.problem}</span>
            </div>
          ) : null}

          <div className="project-detail">
            <span className="k">Built</span>
            <span className="v">{p.contribution}</span>
          </div>

          {p.showMeta && p.impact ? (
            <div className="project-detail">
              <span className="k">Impact</span>
              <span className="v">{p.impact}</span>
            </div>
          ) : null}

          <div className="stack">
            {p.stack.map((s, i) => (
              <span className="chip" key={i}>{s}</span>
            ))}
          </div>

          {(hasLink(p.liveUrl) || validRepos.length > 0) ? (
            <div className="project-actions">
              {hasLink(p.liveUrl) ? (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <GlobeIcon />
                  <span>View Site</span>
                </a>
              ) : null}
              {validRepos.map((repo, i) => (
                <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <GitHubIcon />
                  <span>{repo.label}</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {/* Visual side — only rendered when image exists */}
        {hasImage ? (
          <div className="project-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={String(p.image)} alt={p.title} />
          </div>
        ) : null}

      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <Reveal>
          <p className="section-label">Selected Work</p>
        </Reveal>
        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectCard p={p} index={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
