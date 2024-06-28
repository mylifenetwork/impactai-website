import React from "react";
import {} from "../style/technologypartners.css";
import deepmotion from "../assets/deepmotion_logo.png";
import blender from "../assets/blender_logo.png";
import mediapipe from "../assets/mediapipe_logo.png";
import readyplayerme from "../assets/readyplayerme_logo.png";
import { Fade } from "react-awesome-reveal";
function TechnologyPartners({ bgcolor }) {
  return (
    <>
      <div className="tech-partners-container" style={{ background: bgcolor }}>
        <Fade triggerOnce>
          <h3>Technology Partners</h3>
        </Fade>
        <div className="sponsor-container">
          <Fade cascade duration={400} triggerOnce>
            <a
              href="https://www.deepmotion.com/saymotion?gad_source=1&gclid=CjwKCAjw65-zBhBkEiwAjrqRMO98KNBXKwgJ0j07Ju6TmsHQVZbQxuak2acAYgIOlNsrnWslVYdtuRoC5EYQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              <img src={deepmotion} alt="Company Logo" />
            </a>
            <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
              <img src={blender} alt="Company Logo" />
            </a>
            <a
              href="https://github.com/google-ai-edge/mediapipe "
              target="_blank"
              rel="noreferrer"
            >
              <img src={mediapipe} alt="Company Logo" />
            </a>
            <a href="https://readyplayer.me/" target="_blank" rel="noreferrer">
              <img src={readyplayerme} alt="Company Logo" />
            </a>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default TechnologyPartners;
