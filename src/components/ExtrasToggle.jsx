function ExtrasToggle({ showLogo, setShowLogo, useEmoji, setUseEmoji }) {
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
      <h4 style={{ marginBottom: "12px" }}>Extras</h4>

      <label style={{ display: "block", marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={showLogo}
          onChange={() => setShowLogo(!showLogo)}
        />{" "}
        Show Logo
      </label>

      <label>
        <input
          type="checkbox"
          checked={useEmoji}
          onChange={() => setUseEmoji(!useEmoji)}
        />{" "}
        Use Emoji in Headings
      </label>
    </div>
  );
}

export default ExtrasToggle;
