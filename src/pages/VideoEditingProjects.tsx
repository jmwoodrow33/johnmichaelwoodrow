// video editing portfolio link page
export default function VideoEditingProjects() {
  return (
    <section className="page stack-lg">
      <header className="stack video-projects-header">
        <h1>Video Editing Projects</h1>
        <p className="muted">
          Click the link below to navigate to my video editing portfolio.
        </p>
      </header>

      <div className="card stack video-projects-card">
        <a
          className="video-projects-logoLink"
          href="https://watchingwrestlingwtso.github.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Watching Wrestling WTSO"
        >
          <img
            className="video-projects-logo"
            src="/images/mac-miller-inspired-symbol-2WL.png"
            alt="Watching Wrestling WTSO"
          />
        </a>

        <div className="video-projects-actions stack">
          <a
            className="btn btn-primary"
            href="https://watchingwrestlingwtso.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Watching Wrestling WTSO →
          </a>

          <a
            className="video-projects-plainLink"
            href="https://watchingwrestlingwtso.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://watchingwrestlingwtso.github.io
          </a>
        </div>
      </div>
    </section>
  );
}