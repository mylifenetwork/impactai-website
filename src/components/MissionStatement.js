import React from "react";
import {} from "../style/mission_statement.css";
import { Slide } from "react-awesome-reveal";
function MissionStatement() {
  return (
    <>
      <Slide triggerOnce direction="left" duration={800}>
        <div className="statement-cont mission-cont">
          <div className="header-container-statement-cont">
            <h1>MISSION</h1>
          </div>
          <div className="statement-paragraph mission">
            <p>
              "Developing cutting-edge AI technologies that solve real-world
              problems, improve lives, and ensure equal access to opportunities
              for all."
            </p>
          </div>
        </div>
      </Slide>
      <Slide triggerOnce direction="right" duration={800}>
        <div className="statement-cont vision-cont">
          <div className="statement-paragraph vision">
            <p>
              "To revolutionize social impact through AI, creating a world where
              technology serves as a catalyst for universal prosperity and
              justice"
            </p>
          </div>
          <div className="header-container-statement-cont">
            <h1>VISION</h1>
          </div>
        </div>
      </Slide>
    </>
  );
}

export default MissionStatement;
