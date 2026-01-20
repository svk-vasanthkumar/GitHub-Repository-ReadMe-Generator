import { useState } from "react";
import RepoInput from "../components/RepoInput";
import SectionSelector from "../components/SectionSelector";
import BadgeSelector from "../components/BadgeSelector";
import TechSelector from "../components/TechSelector";
import PreviewBox from "../components/PreviewBox";
import ExtrasToggle from "../components/ExtrasToggle";


function RepoReadmePage() {
  const [showCustomize, setShowCustomize] = useState(false);
  

  const [sections, setSections] = useState({
    Overview: true,
    Badges: true,
    Features: true,
    "Tech Stack": true,
    Installation: true,
    Usage: true,
  });

  const [badges, setBadges] = useState({
    Stars: true,
    Forks: true,
    Commits: false,
    "Repo Views": false,
  });

 const [tech, setTech] = useState({
  HTML: true,
  CSS: true,
  JavaScript: true,
  TypeScript: false,
  React: true,
  "Next.js": false,
  "Node.js": true,
  Python: false,
  Java: false,
  "C++": false,

  Git: true,
  GitHub: true,
  "VS Code": true,
  Docker: false,
  Firebase: false,
  MongoDB: false,
  MySQL: false,
  Postman: false,
  Linux: false,
});


  const [repoUrl, setRepoUrl] = useState("");
  const [repoData, setRepoData] = useState(null);
  const [showLogo, setShowLogo] = useState(true);
  const [useEmoji, setUseEmoji] = useState(true);

  const getProjectName = () => {
    try {
      const parts = repoUrl.replace("https://github.com/", "").split("/");
      return parts[1] || "Project Title";
    } catch {
      return "Project Title";
    }
  };

  const fetchRepoData = async () => {
    try {
      const parts = repoUrl.replace("https://github.com/", "").split("/");
      const user = parts[0];
      const repo = parts[1];

      const res = await fetch(`https://api.github.com/repos/${user}/${repo}`);
      const data = await res.json();

      setRepoData({
        user,
        repo,
        stars: data.stargazers_count,
        forks: data.forks_count,
        updated: data.updated_at,
      });
    } catch (err) {
      console.log("GitHub fetch error", err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: "420px",
          padding: "32px",
          borderRight: "1px solid #1e293b",
          overflowY: "auto",
        }}
      >
        <h2>README Repo</h2>

        <p style={{ color: "#94a3b8" }}>
          Developed by Vasanthkumar (SVK)
        </p>

        <RepoInput
          repoUrl={repoUrl}
          setRepoUrl={(url) => {
            setRepoUrl(url);
            if (url.includes("github.com")) {
              setTimeout(fetchRepoData, 500);
            }
          }}
        />

        {/* Customize Button */}
        <button
          onClick={() => setShowCustomize(!showCustomize)}
          style={{
            marginTop: "20px",
            padding: "14px 24px",
            borderRadius: "10px",
            backgroundColor: "#22c55e",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Customize README
        </button>

        {/* CUSTOMIZE AREA */}
       {showCustomize && (
  <>
    <SectionSelector sections={sections} setSections={setSections} />
    <BadgeSelector badges={badges} setBadges={setBadges} />
    <TechSelector tech={tech} setTech={setTech} />
    <ExtrasToggle
      showLogo={showLogo}
      setShowLogo={setShowLogo}
      useEmoji={useEmoji}
      setUseEmoji={setUseEmoji}
    />
  </>
)}


      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <PreviewBox
  sections={sections}
  badges={badges}
  tech={tech}
  showLogo={showLogo}
  useEmoji={useEmoji}
  projectName={getProjectName()}
  repoData={repoData}
/>

      </div>
    </div>
  );
}

export default RepoReadmePage;
