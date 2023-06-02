import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import NonInteractive from "./components/nonInteractive/nonInteractive";
import ProjectsPage from "./components/projects/projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nonInteractive" element={<NonInteractive />} />
          <Route path="/nonInteractive/projects" element={<ProjectsPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
