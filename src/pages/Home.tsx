import { Link } from "react-router-dom";
import heroVideo from "../assets/background.webm";

// homepage with full-screen hero and a short list of featured projects
// projects defined in an array for easier maintenance.
const featured = [
  {
    to: "/projects/inventory-management-system",
    title: "Inventory Management System",
    description:
      "Full stack application focused on CRUD workflows, data integrity, and practical business logic.",
    tech: ["C#", ".NET", "SQL"],
  },
  {
    to: "/projects/video-downloader-hq",
    title: "Video Downloader HQ",
    description: "A Python desktop utility for downloading videos quickly and reliably.",
    tech: ["Python", "GUI", "yt-dlp"],
  },
  {
    to: "/projects/task-management-system",
    title: "Task Management System",
    description:
      "Full stack task dashboard with a Node/Express API, MongoDB (Mongoose), and a Bootstrap + vanilla JS frontend.",
    tech: ["JavaScript", "Node/Express", "MongoDB"],
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="page home-hero">
        {/* Background video */}
        <video
          className="home-hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="home-hero-overlay" />

        {/* CENTERED HERO TEXT */}
        <div className="home-hero-center">
          <h1 className="hero-name">John-Michael Woodrow</h1>

          <p className="hero-subtitle">
            Software Developer • IT Specialist
          </p>

          <p className="hero-subtitle">
            Full Stack Applications • REST APIs • Databases • System Troubleshooting
          </p>

          <p className="hero-subtitle hero-tagline">
            I build reliable software systems and adapt quickly across technologies to solve real world problems in both development and IT environments.
          </p>

          {/* Scroll cue */}
          <a className="scroll-cue" href="#featured">
            <span>Featured Projects</span>
            <span className="scroll-cue-arrow">↓</span>
          </a>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section id="featured" className="page stack-lg featured-section">
        <h2 className="featured-title">Featured Projects</h2>

        <div className="featured-grid">
          {featured.map(({ to, title, description, tech }) => (
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
    </>
  );
}