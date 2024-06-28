import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(true);
  // let changeDarkMode = (mode) => {
  //   let mode_s = mode === "dark" ? true : false;
  //   if (mode_s !== darkMode) {
  //     setDarkMode(mode === "dark" ? true : false);
  //   }
  // };
  return (
    <>
      <DarkModeToggle/>
    </>
  );
}

export default DarkMode;
