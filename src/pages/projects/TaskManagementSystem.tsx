// src/pages/projects/TaskManagementSystem.tsx
import ProjectPage from "../../components/ProjectPage";
import { useEffect } from "react";

export default function TaskManagementSystem() {
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <ProjectPage
      title="Task Management System"
      subtitle="JavaScript / Node.js / Express / MongoDB"
      blurb="A full stack task management dashboard with a Node/Express API and a MongoDB database. The backend uses Mongoose models and REST-style routes, while the frontend is a clean Bootstrap + vanilla JavaScript UI served directly by the Express app. Built to practice real CRUD workflows, data modeling, and building a small system end-to-end."
      tech={[
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "dotenv",
        "Bootstrap 5",
        "Vanilla JS (frontend)",
      ]}
      meta={[
        { label: "Type", value: "Full stack web app" },
        { label: "Backend", value: "Express API + Mongoose models" },
        { label: "Frontend", value: "Bootstrap UI + vanilla JS (served from /public)" },
        { label: "Data", value: "MongoDB collections for tasks/teams/users" },
      ]}
      highlights={[
        "CRUD endpoints for tasks, teams, and users",
        "Mongoose schemas + relationships (populate) for richer API responses",
        "Express serves the frontend dashboard (static /public + index fallback)",
        "Clean UI flows for navigating between dashboard views",
        "Environment-based DB config using dotenv",
      ]}
      whatILearned={[
        "How to structure Express routes and keep backend logic organized",
        "Modeling data in MongoDB with Mongoose schemas and relationships",
        "Serving a frontend from the same Node app and keeping it simple",
        "Building end-to-end CRUD workflows that actually behave like a system",
      ]}
      links={[
        {
          label: "GitHub Repo",
          href: "https://github.com/jmwoodrow33/TaskManagementSystem",
        },
      ]}
      hero={
        <div className="project-hero-placeholder">
          <div className="muted">Demo video / screenshots coming soon.</div>
          <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
            A short dashboard walkthrough is under construction.
          </div>
        </div>
      }
    />
  );
}