// software projects overview page – renders a card for each project
import { Link } from "react-router-dom";

// this array drives the grid below, keeping markup tidy
const projects = [
  {
    to: "/projects/inventory-management-system",
    title: "Inventory Management System",
    description:
      "Full stack application focused on CRUD workflows, data integrity, and practical business logic.",
    tech: ["C#", ".NET", "SQL"],
  },
  {
    to: "/projects/task-management-system",
    title: "Task Management System",
    description:
      "Full stack task dashboard with a Node/Express API, MongoDB (Mongoose), and a Bootstrap + vanilla JS frontend.",
    tech: ["JavaScript", "Node/Express", "MongoDB"],
  },
  {
    to: "/projects/video-downloader-hq",
    title: "Video Downloader HQ",
    description:
      "A Python desktop utility for downloading videos quickly and reliably.",
    tech: ["Python", "GUI", "yt-dlp"],
  },
  {
    to: "/projects/flappy-bird-clone",
    title: "Flappy Bird Clone",
    description:
      "A Python / Pygame arcade game featuring physics-based movement, collision detection, obstacle generation, and persistent high score saving.",
    tech: ["Python", "Pygame", "Game Dev"],
  },
  {
    to: "/projects/minesweeper-game",
    title: "Minesweeper Browser Game",
    description:
      "A classic Minesweeper game implemented in vanilla JavaScript for the browser, featuring multiple difficulty levels and intuitive controls.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    to: "/projects/blackjack-console-game",
    title: "BlackJack Console Game",
    description:
      "A Java-based multiplayer BlackJack game with server-client architecture for console-based gameplay.",
    tech: ["Java", "Maven"],
  },
  {
    to: "/projects/amity",
    title: "Amity",
    description:
      "A multipurpose Discord bot built with Python and discord.py, featuring a modular cog system for extensible functionality.",
    tech: ["Python", "discord.py"],
  },
  {
    to: "/projects/portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and TypeScript, featuring responsive design and project showcases.",
    tech: ["React", "TypeScript", "Vite"],
  },
];

export default function SoftwareProjects() {
  return (
    <section className="page stack-lg">
      <header className="stack">
        <h1>Software Projects</h1>
        <p className="muted">
          A collection of my software projects. Each card links to a dedicated project page
          where I will be adding the full breakdown (stack, features, screenshots, video, and notes).
        </p>
      </header>

      <div className="featured-grid software-grid">
        {projects.map(({ to, title, description, tech }) => (
          <Link key={to} className="card project-card" to={to}>
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-meta">
              {tech.map(t => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}