import React, { useState } from "react";
import {} from "../style/aboutus.css";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import MissionStatement from "../components/MissionStatement";
import vector_graphic from "../assets/vector_graphic_black_to_primary.png";
import { Zoom, Fade } from "react-awesome-reveal";
import team_members from "../data/team";

function About() {
  const [teamAlignment, setTeamAlignment] = useState(window.innerWidth >= 550); //true signifies what happens for big screens
  window.addEventListener("resize", () => {
    window.innerWidth > 550 ? setTeamAlignment(true) : setTeamAlignment(false);
  });
  return (
    <>
      <div className="about-us-container">
        <Header
          header={"About Us"}
          subheader={"Learn More About Us and Our Company"}
          title_color={"var(--tertiary-accented)"}
          subheader_color={"var(--secondary-three)"}
          background={"var(--primary-two)"}
        />
        <div className="company-desc-cont">
          <Zoom triggerOnce duration={600}>
            <div className="company-description-container">
              <h1>Our Company </h1>
              <p>
                Glassbox AI Limited, is an AI service applicable across
                industries powered by our proprietary <b>Explainable AI</b>. We
                were founded with the aim to bridge the gap in{" "}
                <b>technological transformation in regulated industries </b>like
                Finance and Insurance by making it possible to better{" "}
                <b>understand the inner workings of AI.</b> With the help of
                powerful visualisations while also making{" "}
                <b>reliable predictions</b> and <b>actionable insights,</b> we
                leverage Explainable AI to make the use of machine learning
                <b> ubiquitous and compliant.</b>
              </p>
            </div>
          </Zoom>
        </div>
        <div
          className="vector-graphics-about"
          style={{ transform: "rotateX(180deg)" }}
        >
          <img src={vector_graphic} alt="Vector Graphic" />
          <img src={vector_graphic} alt="Vector Graphic" />
        </div>
        <div className="team-container">
          <Zoom triggerOnce duration={500}>
            <h1>Meet Our Team!</h1>
          </Zoom>
          <div className="team-members-cards-container">
            <Fade
              cascade
              duration={500}
              fraction={0.1}
              style={{ height: "100%" }}
              triggerOnce
            >
              {team_members.map((member) => {
                return teamAlignment ? (
                  <div className="team-member-card">
                    <h3>{member.name}</h3>
                    <img src={member.photo} alt={member.name} />
                    <h4>{member.position}</h4>
                    <p>{member.experience}</p>
                  </div>
                ) : (
                  <>
                    <div className="team-member-card">
                      <div className="image-container-team-member-small">
                        <img src={member.photo} alt={member.name} />
                      </div>
                      <div className="small-screen-content-container-about">
                        <h3>{member.name}</h3>
                        <h4>{member.position}</h4>
                        <p>{member.experience}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </Fade>
          </div>
        </div>
        <div className="vector-graphics-about">
          <img src={vector_graphic} alt="Vector Graphic" />
          <img src={vector_graphic} alt="Vector Graphic" />
        </div>
        <div className="about-us-mission-container">
          <MissionStatement />
        </div>
      </div>
      <FooterComponent showVectorFiller={true} />
    </>
  );
}

export default About;
