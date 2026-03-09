import ProjectPage from "../../components/ProjectPage";
import { useEffect } from "react";

export default function Amity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPage
      title="Amity"
      subtitle="Python / Discord Bot"
      blurb="A multipurpose Discord bot built using Python and discord.py with a modular cog system. The bot uses the '!!' command prefix and includes basic functionality like a ping command to check latency, with an extensible architecture for adding more features."
      tech={["Python", "discord.py"]}
      meta={[
        { label: "Type", value: "Discord bot" },
        { label: "Architecture", value: "Cog-based modular design" },
        { label: "Focus", value: "Bot commands, event handling, extensibility" }
      ]}
      highlights={[
        "Command prefix system ('!!' for interactions)",
        "Ping command for latency checking",
        "Modular cog system for easy expansion",
        "Clean setup for adding new bot features"
      ]}
      whatILearned={[
        "Building Discord bots with discord.py",
        "Implementing modular command systems using cogs",
        "Managing bot configuration and environment setup",
        "Creating extensible bot architectures"
      ]}
      links={[
        { label: "GitHub Repo", href: "https://github.com/jmwoodrow33/Amity" }
      ]}
      hero={
        <div className="project-hero-placeholder">
          <div className="muted">Demo video / screenshots coming soon.</div>
          <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
            A short bot demonstration is under construction.
          </div>
        </div>
      }
    />
  );
}