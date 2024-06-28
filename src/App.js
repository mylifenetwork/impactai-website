import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import {} from "./style/app.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project1 from "./pages/Projects Pages/Project1";
import LoadingScreen from "./pages/LoadingScreen";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const [showProjMenu, setShowProjMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  });
  return !isLoading ? (
    <>
      <div class="app-container">
        <BrowserRouter>
            <NavBar
              showProjMenu={showProjMenu}
              setShowProjMenu={setShowProjMenu}
            />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/projects/sign-language-translation-project"
              element={<Project1 />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  ) : (
    <LoadingScreen />
  );
}

export default App;
