import React from "react";
import robot from "../assets/loading-robot.png";
import {} from "../style/loadingscreen.css";
function LoadingScreen() {
  return (
    <>
      <div className="loading-screen-container">
        <div className="img-container">
          <img src={robot} alt="LOADING SCREEN LOGO" />
        </div>
        <h4>Loading</h4>
      </div>
    </>
  );
}

export default LoadingScreen;
