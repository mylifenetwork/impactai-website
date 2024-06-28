import React from "react";
import {} from "../style/header.css";
import { Fade } from "react-awesome-reveal";
import NavMargin from "./NavMargin";
function Header({
  header,
  title_color,
  subheader,
  subheader_color,
  background,
  // circle_color,
  // video_media,
  // icon,
  // icon_add_style,
  // videosplash
}) {
  return (
    <>
      {/* <div className="about-us-container">
        <div
          className="about-us-video-container"
          style={{ position: "absolute", top: "0px" }}
        >
          <video autoPlay loop muted className="video-bg">
            <source src={video_media} type="video/mp4" />
          </video>
        </div>
        <div className="about-us-content-continer" style={{ zIndex: "2" }}> */}
      <NavMargin bgcolor={background} />
      <Fade triggerOnce duration={500}>
        <div className="header-content" style={{ background: background }}>
          <h1 style={{ color: title_color,textTransform:'uppercase' }}>{header}</h1>
          <h3 style={{ color: subheader_color }}>{subheader}</h3>
        </div>
      </Fade>
      {/* <div
            className="header-container-big"
            // style={{ background: background_c }}
          >
            <div
              className="circle-header"
              style={{ background: circle_color }}
            />
            <Fade
              delay={200}
              duration={400}
              triggerOnce
              cascade
              style={{ zIndex: 100 }}
            >
              <h2 style={icon_add_style}>{icon}</h2>
              <h1 style={{ color: title_color }}>{header}</h1>
            </Fade>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
