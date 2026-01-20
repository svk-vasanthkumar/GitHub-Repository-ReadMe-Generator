function RepoInput({ repoUrl, setRepoUrl }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <label style={{ fontSize: "14px", color: "#cbd5f5" }}>
        GitHub Repository URL
      </label>

      <input
        type="text"
        placeholder="https://github.com/username/repo-name"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{
          width: "100%",
          marginTop: "8px",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #1e293b",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          outline: "none",
        }}
      />
    </div>
  );
}

export default RepoInput;
