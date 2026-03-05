// src/components/ProjectPage.tsx
import { Link } from "react-router-dom";

type ProjectLink = { label: string; href: string };
type ProjectMetaItem = { label: string; value: string };

type ProjectPageProps = {
  title: string;
  subtitle?: string;
  blurb: string;

  // optional sections
  tech?: string[];
  highlights?: string[];
  whatILearned?: string[];
  nextSteps?: string[];
  links?: ProjectLink[];
  meta?: ProjectMetaItem[];

  // optional slots
  hero?: React.ReactNode;      // image/video/etc at top
  children?: React.ReactNode;  // extra custom sections if needed
};

export default function ProjectPage({
  title,
  subtitle,
  blurb,
  tech = [],
  highlights = [],
  whatILearned = [],
  nextSteps = [],
  links = [],
  meta = [],
  hero,
  children,
}: ProjectPageProps) {
  return (
    <section className="page">
      <div className="project-top">
        <div className="project-top-left">
          <h1 className="page-title">{title}</h1>
          {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        </div>

        <div className="project-top-right">
          <Link className="btn ghost" to="/softwareprojects">
            ← Back to Software Projects
          </Link>
        </div>
      </div>

      {/* HERO TEMPLATE: LEFT (blurb+links) | RIGHT (media) */}
      <div className="card project-hero">
        <div className="project-hero-split">
          {/* LEFT SIDE */}
          <div className="project-hero-info">
            <p className="project-hero-blurb">{blurb}</p>

            {links.length ? (
              <div className="project-links">
                {links.map((l) => (
                  <a
                    key={l.href}
                    className="btn btn-primary"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* RIGHT SIDE */}
          <div className="project-hero-media">
            {hero ? hero : <div className="project-hero-placeholder" />}
          </div>
        </div>
      </div>

      {meta.length ? (
        <div className="card">
          <h2 className="section-title">Project Info</h2>
          <div className="project-meta">
            {meta.map((m) => (
              <div key={m.label} className="project-meta-item">
                <div className="muted">{m.label}</div>
                <div>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {tech.length ? (
        <div className="card">
          <h2 className="section-title">Tech</h2>
          <div className="pill-row">
            {tech.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      ) : null}

      {highlights.length ? (
        <div className="card">
          <h2 className="section-title">Highlights</h2>
          <ul className="list">
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      ) : null}

      {whatILearned.length ? (
        <div className="card">
          <h2 className="section-title">What I Learned</h2>
          <ul className="list">
            {whatILearned.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      ) : null}

      {nextSteps.length ? (
        <div className="card">
          <h2 className="section-title">Next Steps</h2>
          <ul className="list">
            {nextSteps.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      ) : null}

      {children ? <div className="project-extra">{children}</div> : null}
    </section>
  );
}