// about page with personal statement and tech stack sections
export default function About(){
  return (
    <section className="page stack-lg">
      <h1>About</h1>

      <div className="card stack">
        <h2>Developer First. Problem Solver Always.</h2>

        <p>
          I am a software developer who enjoys building real, practical solutions to real problems.
          My focus is not just writing code that works, but understanding the problem deeply and
          creating systems that are reliable, maintainable, and purposeful.
        </p>

        <p>
          Through my education and hands on experience, I have built full stack applications,
          REST APIs, database driven systems, and user interfaces designed for real world use.
          I take pride in writing clean code, structuring projects properly, and continuously
          refining solutions until they are both efficient and easy to understand.
        </p>

        <p>
          My work term experience in an IT environment strengthened my ability to operate in
          production settings. I gained experience with system deployment, troubleshooting,
          documentation, and supporting users in a fast paced environment. That experience
          taught me how software interacts with real infrastructure and why reliability
          and communication matter just as much as technical skill.
        </p>

        <p>
          What drives me most is solving problems. I enjoy breaking complex challenges into
          logical steps, analyzing different approaches, and improving systems until they
          are stable and well designed. I am adaptable, comfortable learning new technologies,
          and always focused on building solutions that genuinely work.
        </p>
      </div>

      {/* TECH STACK SECTION */}
      <div className="card stack">
        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {[
            { title: "Languages", items: ["Java","C#","JavaScript","TypeScript","Python","SQL"] },
            { title: "Frameworks & Libraries", items: ["React",".NET / ASP.NET","Spring Boot","Node.js"] },
            { title: "Databases", items: ["MySQL","MariaDB","MongoDB"] },
            { title: "Tools & Technologies", items: ["Git & GitHub","REST API Design","Object Oriented Programming","Database Design","Agile Development","IT Troubleshooting"] },
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
        I focus on understanding core concepts so I can step into any stack and become productive fast.
    </p>
    </section>
  );
}