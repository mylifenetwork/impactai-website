import React from "react";
import {} from "../style/home_page.css";
import { NavLink } from "react-router-dom";
import NavMargin from "../components/NavMargin";
import { ReactTyped } from "react-typed";
import LandingDisplay from "../components/LandingDisplay";
import landingdisplaydata from "../data/landingdisplaydata";
import video from "../assets/3129957-uhd_3840_2160_25fps.mp4";
import { AttentionSeeker, Bounce, Fade, Zoom } from "react-awesome-reveal";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import TechnologyPartners from "../components/TechnologyPartners";
import FeatureCard from "../components/FeatureCard";
import features from "../data/features_technology";
import vector_graphic from "../assets/vector_graphic_black_to_primary.png";
import IndustryInfoCard from "../components/IndustryInfoCard";
import MissionStatement from "../components/MissionStatement";
import YouTube from "react-youtube";
import SliderCarousel from "../components/SliderCarousel";
import FooterComponent from "../components/Footer";
function HomePage() {
  let classNames = [];
  landingdisplaydata.map((item) => {
    return classNames.push(item.class);
  });
  return (
    <>
      <div className="landing_page" style={{ background: "black" }}>
        <div className="background-image-container">
          <video autoPlay loop muted className="video-bg">
            <source src={video} type="video/mp4" />
          </video>
          <div className="container-tone">
            <NavMargin bgcolor="none" />
            <div className="content-container">
              <Zoom duration={750} triggerOnce>
                <h1>Impact AI</h1>
                <h3>
                  Artificial Intelligence for{" "}
                  <br className="break-line-slogan" />
                  <span>
                    <ReactTyped
                      strings={[
                        "Communities",
                        "Social Impact",
                        "Everyone",
                        "Positive Change",
                        "Humanity",
                        "Tomorrow",
                        "Equality",
                        "Inclusivity",
                      ]}
                      typeSpeed={120}
                      loop={true}
                      startDelay={750}
                    />
                  </span>
                </h3>
              </Zoom>
              <hr className="landing-page-hr" />
              <div className="landing-display" id="tech-partners-cnt">
                <LandingDisplay data={landingdisplaydata} />
              </div>
            </div>
            <TechnologyPartners bgcolor={'var(--accent)'}/>
            <img
              src={vector_graphic}
              className="vector-graphic"
              alt="vector graphic"
            />
            <div className="post-vector-container">
              <div className="slider-container">
                <Fade style={{ zIndex: "10000" }} triggerOnce duration={750}>
                  <AttentionSeeker
                    effect="pulse"
                    triggerOnce
                    delay={750}
                    duration={750}
                  >
                    <h1 className="slider-header">What We Do</h1>
                  </AttentionSeeker>
                </Fade>
                <Fade duration={500} triggerOnce>
                  <SliderCarousel />
                </Fade>
                <AttentionSeeker effect="tada" triggerOnce>
                  <NavLink to="projects/sign-language-translation-project">
                    <button className="slider-container-button">
                      Check Out Our Projects
                      <IoIosArrowDroprightCircle />
                    </button>
                  </NavLink>
                </AttentionSeeker>
              </div>
              <div className="tech-f-container">
                <Zoom triggerOnce duration={500}>
                  <div className="tech-f-container-header">
                    <h1>WHY US?</h1>
                    <p>
                      Building AI that can be <b>trusted</b>
                    </p>
                  </div>
                </Zoom>
                <div className="tech-features-container">
                  <Fade cascade triggerOnce duration={250} fraction={0.1}>
                    {features.map((feature) => {
                      return (
                        <div className="tech-feature">
                          <FeatureCard
                            name={feature.category}
                            icon={feature.icon}
                          />
                        </div>
                      );
                    })}
                  </Fade>
                </div>
                <Zoom triggerOnce duration={250}>
                  <NavLink to="/about-us">
                    <button>
                      Learn More About Us <IoIosArrowDroprightCircle />
                    </button>
                  </NavLink>
                </Zoom>
              </div>
              <div className="mission-container">
                <MissionStatement />
              </div>
              <div className="industry-info-container">
                <Bounce
                  triggerOnce
                  cascade
                  duration={500}
                  delay={200}
                  fraction={0.1}
                >
                  <h2
                    className="industry-usage-header"
                    id="info-card-header-health"
                  >
                    Social Uses of AI
                  </h2>
                  <p className={`industry-usage-slogan`}>
                    AI empowers diverse fields, driving social good and
                    innovation everywhere.
                  </p>
                </Bounce>
                <Fade cascade triggerOnce duration={200}>
                  {landingdisplaydata.map((data, index) => {
                    return (
                      <IndustryInfoCard
                        name={data.category}
                        description={data.detailed_description}
                        stat={data.stats}
                        image={data.image}
                        image_2={data.image_2}
                        className={data.class}
                        icon={data.icon_small}
                        classes={classNames}
                        index={index}
                      />
                    );
                  })}
                </Fade>
              </div>
            </div>
            <img
              src={vector_graphic}
              className="vector-graphic"
              alt="vector graphic"
              style={{ transform: "rotateX(180deg)", marginTop: "-8px" }}
            />
            <Fade triggerOnce duration={600}>
              <div className="introduction-video">
                <h3>Watch Our Pitch Video!</h3>
                <div className="yt-vid-container">
                  <YouTube
                    videoId="KtFp21jq0BY"
                    loading="VIDEO LOADING..."
                    iframeClassName="youtube-video"
                  />
                </div>
              </div>
            </Fade>
            <div className="footer-container" style={{ position: "relative" }}>
              <FooterComponent showVectorFiller={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
