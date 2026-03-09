// contact page listing ways to reach or view my work
export default function Contact() {
  const entries = [
    { label: "Email", value: "jmdwoodrow@gmail.com", href: "mailto:jmdwoodrow@gmail.com" },
  ];

  const extra = [
    { label: "GitHub (Personal)", href: "https://github.com/jmwoodrow33" },
    { label: "GitHub (School Work)", href: "https://github.com/JohnMichaelWoodrow" },
    { label: "Linkedin", href: "https://linkedin.com/in/john-michael-woodrow/" },
    { label: "Video Portfolio", href: "https://watchingwrestlingwtso.github.io" },
  ];

  return (
    <section className="page stack-lg">
      <h1>Contact</h1>

      {/* CONTACT INFO */}
      <div className="card stack">
        <h2 className="contact-section-title">Contact</h2>
        {entries.map(e => (
          <div key={e.href} className="contact-item">
            <span className="contact-label">{e.label}</span>
            <a href={e.href} className="contact-value">
              {e.value || e.href.replace(/^https?:\/\//, "")}
            </a>
          </div>
        ))}
      </div>

      {/* ADDITIONAL LINKS */}
      <div className="card stack">
        <h2 className="contact-section-title">Additional Links</h2>
        {extra.map(e => (
          <div key={e.href} className="contact-item">
            <span className="contact-label">{e.label}</span>
            <a
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-value"
            >
              {e.href.replace(/^https?:\/\//, "")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}