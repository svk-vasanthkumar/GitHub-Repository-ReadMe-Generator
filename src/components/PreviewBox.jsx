import { marked } from "marked";

function PreviewBox({
  sections,
  badges,
  tech,
  showLogo,
  useEmoji,
  projectName,
  repoData,
}) {

  let markdown = "";

  if (showLogo) {
    markdown += `<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" width="120" />
</p>\n\n`;
  }

  markdown += `# ${projectName}\n\n`;

  // Badges (REAL from GitHub)
  if (sections.Badges && repoData) {
    let badgeLine = "";

    if (badges.Stars) {
      badgeLine += `![Stars](https://img.shields.io/github/stars/${repoData.user}/${repoData.repo}) `;
    }

    if (badges.Forks) {
      badgeLine += `![Forks](https://img.shields.io/github/forks/${repoData.user}/${repoData.repo}) `;
    }

    if (badges.Commits) {
      badgeLine += `![Last Commit](https://img.shields.io/github/last-commit/${repoData.user}/${repoData.repo}) `;
    }

    if (badges["Repo Views"]) {
      badgeLine += `![Views](https://komarev.com/ghpvc/?username=${repoData.user}&repo=${repoData.repo}) `;
    }

    if (badgeLine) {
      markdown += badgeLine + "\n\n";
    }
  }

  if (sections.Overview) {
    markdown += `## ${useEmoji ? "📖 " : ""}Overview\n`;
    markdown += `This is a simple and useful GitHub README generator.\n\n`;
  }

  if (sections.Features) {
    markdown += `## ${useEmoji ? "✨ " : ""}Features\n`;
    markdown += `- Easy to use\n- Clean UI\n- Beginner friendly\n\n`;
  }

  if (sections["Tech Stack"]) {
  markdown += `## ${useEmoji ? "🛠 " : ""}Tech Stack\n`;

  if (tech.HTML)
    markdown += `![HTML](https://img.shields.io/badge/HTML-orange?logo=html5&logoColor=white) `;

  if (tech.CSS)
    markdown += `![CSS](https://img.shields.io/badge/CSS-blue?logo=css3&logoColor=white) `;

  if (tech.JavaScript)
    markdown += `![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black) `;

  if (tech.React)
    markdown += `![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) `;

  if (tech.Git)
    markdown += `![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) `;

  if (tech.GitHub)
    markdown += `![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white) `;

  if (tech["VS Code"])
    markdown += `![VSCode](https://img.shields.io/badge/VSCode-007ACC?logo=visualstudiocode&logoColor=white) `;

    if (tech.TypeScript)
    markdown += `![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) `;

  if (tech["Next.js"])
    markdown += `![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) `;

  if (tech["Node.js"])
    markdown += `![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) `;

  if (tech.Python)
    markdown += `![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white) `;

  if (tech.Java)
    markdown += `![Java](https://img.shields.io/badge/Java-007396?logo=java&logoColor=white) `;

  if (tech["C++"])
    markdown += `![C++](https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white) `;

  if (tech.Docker)
    markdown += `![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white) `;

  if (tech.Firebase)
    markdown += `![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black) `;

  if (tech.MongoDB)
    markdown += `![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) `;

  if (tech.MySQL)
    markdown += `![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white) `;

  if (tech.Postman)
    markdown += `![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white) `;

  if (tech.Linux)
    markdown += `![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black) `;


  markdown += `\n\n`;
}


  if (sections.Installation) {
    markdown += `## ${useEmoji ? "⚙️ " : ""}Installation\n`;
    markdown += `\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\n\n`;
  }

  if (sections.Usage) {
    markdown += `## ${useEmoji ? "🚀 " : ""}Usage\n`;
    markdown += `Run the app and generate README easily.\n\n`;
  }

  const copyReadme = () => {
    navigator.clipboard.writeText(markdown);
    alert("README copied successfully!");
  };

  const downloadReadme = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "README.md";
    link.click();
  };

  marked.setOptions({
    breaks: true,
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "760px",
        backgroundColor: "#020617",
        border: "1px solid #1e293b",
        borderRadius: "20px",
        padding: "36px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
      }}
    >
      <h3 style={{ marginBottom: "16px" }}>README Preview</h3>

      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
          color: "#e5e7eb",
        }}
      />

      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <button
          onClick={copyReadme}
          style={{
            padding: "12px 22px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
            color: "#020617",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(56,189,248,0.4)",
          }}
        >
          📋 Copy README
        </button>

        <button
          onClick={downloadReadme}
          style={{
            padding: "12px 22px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "#020617",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(34,197,94,0.4)",
          }}
        >
          ⬇️ Download README.md
        </button>
      </div>
    </div>
  );
}

export default PreviewBox;
