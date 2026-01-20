import { useState } from "react";
import HomePage from "./pages/HomePage";
import RepoReadmePage from "./pages/RepoReadmePage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <HomePage onRepoClick={() => setPage("repo")} />
      )}

      {page === "repo" && <RepoReadmePage />}
    </>
  );
}

export default App;
