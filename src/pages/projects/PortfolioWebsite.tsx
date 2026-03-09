import ProjectPage from "../../components/ProjectPage";
import { useEffect } from "react";

export default function PortfolioWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPage
      title="Portfolio Website"
      subtitle="React / TypeScript / Vite"
      blurb="A personal portfolio website built with React 18 and TypeScript, featuring responsive design and project showcases. The site includes a mobile-friendly navigation drawer, video demonstrations of projects, and a clean dark theme optimized for readability."
      tech={["React", "TypeScript", "Vite", "CSS", "React Router"]}
      meta={[
        { label: "Type", value: "Portfolio website" },
        { label: "Architecture", value: "SPA with client-side routing" },
        { label: "Focus", value: "Responsive design, project showcases, user experience" }
      ]}
      highlights={[
        "Responsive navigation with mobile drawer",
        "Project showcases with videos and descriptions",
        "Dark theme optimized for readability",
        "TypeScript for type safety",
        "Vite for fast development and builds"
      ]}
      whatILearned={[
        "Building modern SPAs with React and TypeScript",
        "Implementing responsive design patterns",
        "Managing routing and navigation in React apps",
        "Optimizing for performance and user experience",
        "Deploying static sites to GitHub Pages"
      ]}
      links={[
        { label: "GitHub Repo", href: "https://github.com/jmwoodrow33/johnmichaelwoodrow" }
      ]}
      hero={
        <div className="project-hero-placeholder">
          <div className="muted">Demo video / screenshots coming soon.</div>
          <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
            A short site walkthrough is under construction.
          </div>
        </div>
      }
    />
  );
}