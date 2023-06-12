import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import NonInteractive from "./components/nonInteractive/nonInteractive";
import ProjectsPage from "./components/projects/projects";
import PlanetProject from "./components/PlanetProject/planetProject";
import WoodshopProject from "./components/woodshopProject/woodshopProject";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/nonInteractive" element={<NonInteractive />} />
          <Route path="/nonInteractive/projects" element={<ProjectsPage />} />
          <Route path="/nonInteractive/projects/planetjumper" element={<PlanetProject />} />
          <Route path="/nonInteractive/projects/woodshopproject" element={<WoodshopProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
