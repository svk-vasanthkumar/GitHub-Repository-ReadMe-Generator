function BadgeSelector({ badges, setBadges }) {
  const badgeList = [
    "Stars",
    "Forks",
    "Commits",
    "Repo Views",
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
      <h4 style={{ marginBottom: "12px" }}>Select Badges</h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {badgeList.map((badge) => {
          const isOn = badges[badge];

          return (
            <button
              key={badge}
              onClick={() =>
                setBadges((p) => ({ ...p, [badge]: !p[badge] }))
              }
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              style={{
                padding: "8px 14px",
                borderRadius: "18px",
                border: "1px solid #38bdf8",
                backgroundColor: isOn ? "#38bdf8" : "transparent",
                color: isOn ? "#020617" : "#38bdf8",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform: "scale(1)",
              }}
            >
              {badge}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BadgeSelector;
