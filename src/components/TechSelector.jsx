function TechSelector({ tech, setTech }) {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Docker",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Postman",
    "Linux",
  ];

  const renderChip = (label, color) => {
    const isOn = tech[label];

    return (
      <button
        key={label}
        onClick={() =>
          setTech((p) => ({ ...p, [label]: !p[label] }))
        }
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        style={{
          padding: "8px 14px",
          borderRadius: "18px",
          border: `1px solid ${color}`,
          backgroundColor: isOn ? color : "transparent",
          color: isOn ? "#020617" : color,
          fontSize: "13px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          transform: "scale(1)",
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "14px",
        backgroundColor: "#020617",
        border: "1px solid #1e293b",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        maxHeight: "280px",
        overflowY: "auto",
      }}
    >
      <h4 style={{ marginBottom: "12px" }}>Languages / Frameworks</h4>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {languages.map((lang) => renderChip(lang, "#facc15"))}
      </div>

      <h4 style={{ margin: "20px 0 12px" }}>Tools / Platforms</h4>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tools.map((tool) => renderChip(tool, "#a78bfa"))}
      </div>
    </div>
  );
}

export default TechSelector;
