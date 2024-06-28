import React, { useState } from "react";
import {} from "../style/industryinfocard.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VictoryPie } from "victory";
import {
  Rotate,
  AttentionSeeker,
  Zoom,
  Fade,
  Slide,
} from "react-awesome-reveal";
function IndustryInfoCard({
  name,
  description,
  stat,
  image,
  image_2,
  icon,
  classes,
  index,
}) {
  const data = {
    category: name,
    icon_small: icon,
    detailed_description: description,
    stats: stat,
    image: image,
    image_2: image_2,
  };
  const [show, setShow] = useState(false);
  const [showExtraImage, setShowExtraImage] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 670 && window.innerWidth <= 996) {
      setShowExtraImage(true);
    } else {
      setShowExtraImage(false);
    }
  });
  return (
    <>
      <div className="info-card-container">
        <a href={`#info-card-header-${index < 5 ? classes[index] : "safety"}`}>
          <div id={`info-card-header-${index < 5 ? classes[index + 1] : ""}`} />
          <div
            className="info-card-header"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div className="info-card-heading">
              <h2 className="info-card-heading-icon">{data.icon_small}</h2>
              <h2>{data.category}</h2>
            </div>
            <button className="header-icon-button">
              {show ? (
                <IoIosArrowUp className="header-icon" />
              ) : (
                <IoIosArrowDown className="header-icon" />
              )}
            </button>
          </div>
        </a>
        <hr />
        <div
          className={
            show
              ? "info-card-container-s info-card-active"
              : "info-card-container-s"
          }
        >
          <div className="info-card-big-content-container">
            <Slide triggerOnce duration={600} style={{ display: "flex" }}>
              <div className="img-container-info-card">
                <img src={data.image} alt={data.category} />
                <img
                  src={data.image_2}
                  alt={data.category}
                  style={
                    showExtraImage ? { display: "block" } : { display: "none" }
                  }
                />
              </div>
            </Slide>
            <div className="info-card-content-container">
              <div className="info-card-statistics">
                {data.stats.map((stats) => {
                  return (
                    <>
                      <a href={stats.stat_link} target="_blank" rel='noreferrer'>
                        <Fade
                          duration={300}
                          triggerOnce
                          style={{ height: "100%" }}
                        >
                          <div className="stat">
                            <div className="graph">
                              <Rotate triggerOnce duration={500} delay={300}>
                                <AttentionSeeker
                                  effect="pulse"
                                  delay={1400}
                                  triggerOnce
                                  duration={400}
                                >
                                  <VictoryPie
                                    data={[
                                      {
                                        x: "Stat",
                                        y: parseInt(
                                          stats.stat.replace("%", "")
                                        ),
                                      },
                                      {
                                        x: "Not Stat",
                                        y:
                                          100 -
                                          parseInt(stats.stat.replace("%", "")),
                                      },
                                    ]}
                                    colorScale={[
                                      "var(--secondary)",
                                      "var(--tertiary-light)",
                                    ]}
                                    labels={["", ""]}
                                    innerRadius={
                                      window.innerWidth <= 996 ? 140 : 120
                                    }
                                    padding={20}
                                  />
                                </AttentionSeeker>
                              </Rotate>
                              <Zoom delay={900} duration={500} triggerOnce>
                                <AttentionSeeker
                                  effect="pulse"
                                  delay={1400}
                                  duration={400}
                                >
                                  <h1 className="stat-data">{stats.stat}</h1>
                                </AttentionSeeker>
                              </Zoom>
                            </div>
                            <Fade triggerOnce delay={900} duration={500}>
                              <AttentionSeeker
                                triggerOnce
                                delay={1400}
                                effect="pulse"
                                duration={400}
                              >
                                <div>
                                  <p>{stats.stat_desc}</p>
                                </div>
                              </AttentionSeeker>
                            </Fade>
                          </div>
                        </Fade>
                      </a>
                    </>
                  );
                })}
              </div>
              <Fade triggerOnce delay={900} duration={500}>
                <p className="category-description">
                  {data.detailed_description}
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustryInfoCard;
