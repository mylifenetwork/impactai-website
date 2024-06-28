import React from "react";
import {} from "../style/landingdisplay.css";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
function LandingDisplay({ data }) {
  return (
    <>
      <div className="container-landing-display">
        <Fade cascade damping={0.2} triggerOnce>
          {data.map((cat) => {
            return (
              <>
                <div className="landing-display-card">
                  <AttentionSeeker triggerOnce effect="pulse" duration={1000}>
                    <h4>{cat.category}</h4>
                    <a href={"#info-card-header-" + cat.class}>
                      <div className="card-icon">{cat.icon}</div>
                    </a>
                    {/* <p>{cat.description}</p> */}
                  </AttentionSeeker>
                </div>
              </>
            );
          })}
        </Fade>
      </div>
    </>
  );
}

export default LandingDisplay;
