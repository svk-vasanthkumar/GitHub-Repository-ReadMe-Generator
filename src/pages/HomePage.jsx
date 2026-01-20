function HomePage({ onRepoClick }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>GitHub README Generator</h1>

      <p style={{ color: "#94a3b8", marginTop: "8px" }}>
        Developed by Vasanthkumar (SVK)
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
        <button
          onClick={onRepoClick}
          style={{
            padding: "14px 26px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "#020617",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          README Repo
        </button>

        <button
          disabled
          style={{
            padding: "14px 26px",
            borderRadius: "10px",
            border: "1px solid #334155",
            backgroundColor: "transparent",
            color: "#64748b",
          }}
        >
          Profile README (Coming Soon)
        </button>
      </div>
    </div>
  );
}

export default HomePage;
