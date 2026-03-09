import ProjectPage from "../../components/ProjectPage";
import minesweeperGif from "../../assets/DemoVideos/misc/Minesweeper.gif";
import { useEffect } from "react";

export default function MinesweeperGame() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPage
      title="Minesweeper Browser Game"
      subtitle="Classic Minesweeper in the Browser"
      blurb="A fully functional implementation of the classic Minesweeper game built with vanilla JavaScript, HTML, and CSS. Features multiple difficulty levels, timer, mine counter, and intuitive controls."
      tech={["JavaScript", "HTML", "CSS"]}
      highlights={[
        "Multiple difficulty levels (Beginner, Intermediate, Expert)",
        "Real-time timer and revealed tiles counter",
        "Right-click flagging system",
        "Recursive tile revealing",
        "Win/lose detection with alerts"
      ]}
      whatILearned={[
        "Game logic implementation",
        "DOM manipulation and event handling",
        "Grid-based algorithms",
        "State management in vanilla JS"
      ]}
      links={[
        { label: "GitHub Repo", href: "https://github.com/jmwoodrow33/MinesweeperBrowserGame" }
      ]}
      meta={[
        { label: "Type", value: "Browser game" },
        { label: "Focus", value: "Game logic, DOM manipulation, event handling" },
        { label: "Architecture", value: "Vanilla JS classes, grid-based state" }
      ]}
      hero={<img src={minesweeperGif} alt="Minesweeper Game Demo" />}
    />
  );
}