import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import NonInteractive from "./components/nonInteractive/nonInteractive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nonInteractive" element={<NonInteractive />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
