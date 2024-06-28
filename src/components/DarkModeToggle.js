import React, { useState } from "react";
import {} from "../style/darkbuttontoggle.css";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function DarkModeToggle() {
  const [dark, setDark] = useState(true);
  const [darkButton, setDarkButton] = useState("nav-darkmode active");
  const [lightButton, setLightButton] = useState("nav-darkmode");
  let toggleLightMode = () => {
    if (dark) {
      setDarkButton("nav-darkmode");
      setDark(false);
      setLightButton("nav-darkmode active");
    }
  };
  let toggleDarkMode = () => {
    if (!dark) {
      setDarkButton("nav-darkmode active");
      setDark(true);
      setLightButton("nav-darkmode");
    }
  };
  // useEffect(() => {
  //   if (dark) {
  //     setDarkButton("nav-darkmode active");
  //     setLightButton("nav-darkmode");
  //   }
  //   if (!dark) {
  //     setDarkButton("nav-darkmode");
  //     setLightButton("nav-darkmode active");
  //   }
  // });

  return (
    <>
      <div className="nav-toggle">
        <button className={lightButton} onClick={toggleLightMode}>
          <IoMdSunny className="toggle-button-image" />
        </button>
        <button className={darkButton} onClick={toggleDarkMode}>
          <IoMdMoon className="toggle-button-image" />
        </button>
        <div className={dark ? "slider right" : "slider left"}></div>
      </div>
    </>
  );
}

export default DarkModeToggle;
