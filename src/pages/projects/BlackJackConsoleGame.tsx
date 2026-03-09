import ProjectPage from "../../components/ProjectPage";
import { useEffect } from "react";

export default function BlackJackConsoleGame() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPage
      title="BlackJack Console Game"
      subtitle="Java / Multiplayer"
      blurb="A Java-based BlackJack game that simulates a multiplayer BlackJack experience with server-client architecture. Players can join a game, interact with a dealer, and play according to standard BlackJack rules, including hitting or standing."
      tech={["Java", "Maven"]}
      meta={[
        { label: "Type", value: "Console game" },
        { label: "Architecture", value: "Server-client for multiplayer" },
        { label: "Focus", value: "Game logic, networking, state management" }
      ]}
      highlights={[
        "Card deck management with shuffling and dealing",
        "Player and dealer interaction (hit or stand)",
        "Multiplayer support via server-client architecture",
        "Standard BlackJack rules implementation"
      ]}
      whatILearned={[
        "Implementing server-client communication in Java",
        "Managing game state across multiple players",
        "Building modular game components (deck, hand, player)",
        "Handling concurrent connections and game flow"
      ]}
      links={[
        { label: "GitHub Repo", href: "https://github.com/jmwoodrow33/BlackJackConsoleGame" }
      ]}
      hero={
        <div className="project-hero-placeholder">
          <div className="muted">Demo video / screenshots coming soon.</div>
          <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
            A short gameplay walkthrough is under construction.
          </div>
        </div>
      }
    />
  );
}