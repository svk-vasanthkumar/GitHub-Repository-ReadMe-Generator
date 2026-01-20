function SectionSelector({ sections, setSections }) {
  const sectionList = [
    "Overview",
    "Badges",
    "Features",
    "Tech Stack",
    "Installation",
    "Usage",
  ];

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "14px",
        backgroundColor: "#020617",
        border: "1px solid #1e293b",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      <h4 style={{ marginBottom: "12px" }}>Select Sections</h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {sectionList.map((sec) => {
          const isOn = sections[sec];

          return (
            <button
              key={sec}
              onClick={() =>
                setSections((p) => ({ ...p, [sec]: !p[sec] }))
              }
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              style={{
                padding: "8px 14px",
                borderRadius: "18px",
                border: "1px solid #22c55e",
                backgroundColor: isOn ? "#22c55e" : "transparent",
                color: isOn ? "#020617" : "#22c55e",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform: "scale(1)",
              }}
            >
              {sec}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SectionSelector;
