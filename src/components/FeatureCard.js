import React from "react";
import {} from "../style/featurecard.css";
function FeatureCard({ name, icon }) {
  return (
    <>
      <div className="feature-div">
        <div className="feature-div-icon">{icon}</div>
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default FeatureCard;
