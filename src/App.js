import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/landingPage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
