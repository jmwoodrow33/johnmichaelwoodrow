// about page with personal statement, what I do, and tech stack sections
export default function About(){
  return (
    <section className="page stack-lg">
      <h1>About Me</h1>

      <div className="card stack">
        <h2>Building reliable software and solving real-world technical problems.</h2>

        <p>
          I am a software developer who enjoys building practical solutions to real problems.
          My focus is not just writing code that works, but understanding the problem deeply
          and designing systems that are reliable, maintainable, and purposeful.
        </p>

        <p>
          Through my education and hands on experience, I have built full stack applications,
          REST APIs, database driven systems, and user interfaces designed for real world use.
          I take pride in writing clean code, structuring projects properly, and building
          systems that are reliable, maintainable, and easy to work with.
        </p>

        <p>
          My work term experience in an IT environment strengthened my ability to operate in
          production settings. I gained experience with system deployment, troubleshooting,
          documentation, and supporting users in a fast paced environment. That experience
          helped me understand how software interacts with real infrastructure and why
          reliability and communication matter just as much as technical skill.
        </p>

        <p>
          I enjoy breaking complex challenges into logical steps, evaluating different
          approaches, and improving systems until they are stable and well designed.
          I am highly adaptable, comfortable learning new technologies quickly, and able
          to step into unfamiliar stacks or environments and become productive fast.
        </p>

        <p>
          Whether working on software development, system improvements, or technical
          problem solving, my goal is always the same: build solutions that genuinely
          work and provide real value.
        </p>
      </div>

      {/* WHAT I DO */}
      <div className="card stack">
        <h2>What I Do</h2>

        <ul className="list">
          <li>Build full stack applications and backend systems</li>
          <li>Design and implement REST APIs and database driven software</li>
          <li>Develop user interfaces and tools for real-world workflows</li>
          <li>Troubleshoot and improve systems across development and IT environments</li>
          <li>Adapt quickly to new technologies, stacks, and technical challenges</li>
        </ul>
      </div>

      {/* TECH STACK SECTION */}
      <div className="card stack">
        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {[
            { title: "Languages", items: ["Java","C#","JavaScript","TypeScript","Python","SQL"] },
            { title: "Frameworks & Libraries", items: ["React",".NET / ASP.NET","Spring Boot","Node.js"] },
            { title: "Tools & Technologies", items: ["Git & GitHub","REST API Development","Database Design","Agile Development","IT Troubleshooting"] },
            { title: "Databases", items: ["MySQL","MariaDB","MongoDB"] },
          ].map(group => (
            <div key={group.title} className="skills-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="adaptability-tagline">
        I am highly adaptable and comfortable learning new technologies quickly.
      </p>

      <p className="adaptability-tagline">
        I focus on understanding core concepts so I can step into new stacks,
        environments, or projects and become productive quickly.
      </p>

    </section>
  );
}