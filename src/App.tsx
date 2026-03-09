// Root application entrypoint. Defines all route-to-component mappings
// inside the shared Layout shell.
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SoftwareProjects from "./pages/SoftwareProjects";
import Contact from "./pages/Contact";
import FlappyBirdClone from "./pages/projects/FlappyBirdClone";
import InventoryManagementSystem from "./pages/projects/InventoryManagementSystem";
import VideoDownloaderHQ from "./pages/projects/VideoDownloaderHQ";
import TaskManagementSystem from "./pages/projects/TaskManagementSystem";
import MinesweeperGame from "./pages/projects/MinesweeperGame";
import BlackJackConsoleGame from "./pages/projects/BlackJackConsoleGame";
import Amity from "./pages/projects/Amity";
import PortfolioWebsite from "./pages/projects/PortfolioWebsite"; 

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/softwareprojects" element={<SoftwareProjects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects/flappy-bird-clone" element={<FlappyBirdClone />} />
        <Route path="/projects/inventory-management-system" element={<InventoryManagementSystem />} />
        <Route path="/projects/video-downloader-hq" element={<VideoDownloaderHQ />} />
        <Route path="/projects/task-management-system" element={<TaskManagementSystem />} />
        <Route path="/projects/minesweeper-game" element={<MinesweeperGame />} />
        <Route path="/projects/blackjack-console-game" element={<BlackJackConsoleGame />} />
        <Route path="/projects/amity" element={<Amity />} />
        <Route path="/projects/portfolio-website" element={<PortfolioWebsite />} />
      </Routes>
    </Layout>
  );
}
