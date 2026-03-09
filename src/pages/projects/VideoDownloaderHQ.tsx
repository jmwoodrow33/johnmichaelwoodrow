// src/pages/projects/VideoDownloaderHQ.tsx
import ProjectPage from "../../components/ProjectPage";
import ytDemo from "../../assets/DemoVideos/YTDownload/YTDLDemo.gif";
import { useEffect } from "react";

export default function VideoDownloaderHQ() {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <ProjectPage
      title="VideoDownloaderHQ"
      subtitle="Python / Desktop Utility"
      blurb="A lightweight desktop utility for downloading videos quickly and reliably. Built with a focus on usability, validation, and clean workflow design. Paste a link, choose your format, and download with predictable behavior and clear feedback."
      tech={[
        "Python 3",
        "GUI (Desktop Application)",
        "yt-dlp",
        "File handling",
      ]}
      meta={[
        { label: "Type", value: "Desktop utility" },
        { label: "Focus", value: "UX, input validation, reliable downloads" },
        { label: "Output", value: "Local file downloads" },
      ]}
      highlights={[
        "Simple paste → download workflow",
        "Handles invalid links gracefully",
        "Structured and reusable utility design",
        "Integrates FFmpeg processing to combine the best available audio and video tracks into one file",
      ]}
      whatILearned={[
        "Designing small utilities with real-world practicality",
        "Importance of error handling in user tools",
        "Keeping GUI apps predictable and maintainable",
      ]}
      links={[
        {
          label: "GitHub Repo",
          href: "https://github.com/jmwoodrow33/VideoDownloaderHQ",
        },
      ]}
      hero={
        <img
          src={ytDemo}
          alt="VideoDownloaderHQ demo"
        />
      }
    />
  );
}