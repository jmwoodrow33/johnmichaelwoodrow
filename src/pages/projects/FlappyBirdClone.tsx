// src/pages/projects/FlappyBirdClone.tsx
import ProjectPage from "../../components/ProjectPage";
import flappyGif from "../../assets/DemoVideos/misc/flappybird.gif";
import { useEffect } from "react";

export default function FlappyBirdClone() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPage
      title="Flappy Bird Clone"
      subtitle="Python / Pygame"
      blurb="A Flappy Bird–style arcade game built with Python and Pygame. This project focuses on core game development concepts including real-time physics, collision detection, state management, and persistent high score storage using JSON. It’s a compact example of combining input, timing, and dynamic object generation into a fully playable desktop game."
      tech={["Python 3", "Pygame", "JSON (save data)"]}
      meta={[
        { label: "Type", value: "Desktop game" },
        { label: "Focus", value: "Game loop, physics, collisions, UI states" },
        { label: "Data", value: "High score saved to highscore.json" },
      ]}
      highlights={[
        "Gravity + velocity-based movement (simple physics loop)",
        "Obstacle generation and scrolling behavior",
        "Collision detection using rect intersections",
        "Game states: home, running, paused, options (foundation)",
        "Persistent high score saving/loading",
      ]}
      whatILearned={[
        "How to structure a real-time game loop cleanly",
        "Why state machines matter for menus/pause/screens",
        "Keeping gameplay logic separate from rendering where possible",
      ]}
      links={[
        { label: "GitHub Repo", href: "https://github.com/jmwoodrow33/FlappyBirdClone" },
      ]}
      hero={
        <img
          src={flappyGif}
          alt="Flappy Bird gameplay"
        />
      }
    />
  );
}