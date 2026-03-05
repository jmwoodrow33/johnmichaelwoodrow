// src/pages/projects/InventoryManagementSystem.tsx
import ProjectPage from "../../components/ProjectPage";
import { useEffect } from "react";

// import your videos here
import mainDemo from "../../assets/DemoVideos/ITMS/demo.mp4";
import addDemo from "../../assets/DemoVideos/ITMS/add.mp4";
import searchDemo from "../../assets/DemoVideos/ITMS/search.mp4";
import editDemo from "../../assets/DemoVideos/ITMS/edit.mp4";
import deleteDemo from "../../assets/DemoVideos/ITMS/delete.mp4";

export default function InventoryManagementSystem() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <ProjectPage
      title="Inventory Management System"
      subtitle="C# / .NET / SQL"
      blurb="A full stack inventory management system designed to handle real-world CRUD workflows. The application allows users to add, search, edit, and delete inventory records while maintaining structured data integrity and responsive UI updates."
      tech={["C#", ".NET", "SQL Server", "Entity Framework"]}
      meta={[
        { label: "Type", value: "Full Stack Application" },
        { label: "Architecture", value: "Client / Server with database backend" },
        { label: "Focus", value: "CRUD workflows, data validation, UI responsiveness" },
      ]}
      highlights={[
        "Complete Create, Read, Update, Delete workflows",
        "Structured database schema with relational integrity",
        "Dynamic search functionality",
        "Form validation and error handling",
        "Separation of concerns between UI and data logic",
      ]}
      whatILearned={[
        "How to design database-driven applications properly",
        "Managing state and validation across full CRUD flows",
        "Structuring backend logic for maintainability",
      ]}
      links={[
        {
          label: "GitHub Repo",
          href: "https://github.com/jmwoodrow33/Inventory-Management-System",
        },
      ]}
      hero={
        <video
        className="itms-hero-wrapper"
          src={mainDemo}
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      }
    >
      {/* FEATURE WALKTHROUGH SECTION */}
      <div className="card">
        <h2 className="section-title">Feature Walkthrough</h2>

        <div className="inventory-video-grid">
          <div>
            <h3>Add Inventory</h3>
            <video src={addDemo} controls />
          </div>

          <div>
            <h3>Search Inventory</h3>
            <video src={searchDemo} controls />
          </div>

          <div>
            <h3>Edit Inventory</h3>
            <video src={editDemo} controls />
          </div>

          <div>
            <h3>Delete Inventory</h3>
            <video src={deleteDemo} controls />
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}