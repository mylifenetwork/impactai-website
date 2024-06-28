import React from "react";
import NavMargin from "../../components/NavMargin";
import {} from "../../style/project1.css";
import TechnologyPartners from "../../components/TechnologyPartners";
import Footer from "../../components/Footer";
import vector_graphic from "../../assets/vector-graphic-primary-three-to-black.png";
import landing_img from "../../assets/project-page-landing-img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AttentionSeeker, Fade, Slide, Zoom } from "react-awesome-reveal";
import silent_struggle from "../../assets/silent-struggle.webp";
import { FaSquare } from "react-icons/fa";
import CountUp from "react-countup";
import { TbTextSize } from "react-icons/tb";
import { FaSignLanguage } from "react-icons/fa";
import { TbTextGrammar } from "react-icons/tb";
import project_info_image from "../../assets/project-info-container.jpeg";
function Project1() {
  const features = [
    {
      icons: [
        {
          icon: <FaSignLanguage />,
        },
        {
          icon: <FaArrowRightLong />,
        },
        {
          icon: <TbTextSize />,
        },
      ],
      text: "Sign Language to Text Conversion",
    },
    {
      icons: [
        {
          icon: <TbTextSize />,
        },
        {
          icon: <FaArrowRightLong />,
        },
        {
          icon: <FaSignLanguage />,
        },
      ],
      text: "Text to Sign Language Conversion",
    },
    {
      icons: [
        {
          icon: <TbTextGrammar />,
        },
      ],
      text: "Grammar Correction",
    },
  ];
  const stats = [
    {
      stat: (
        <CountUp
          start={0}
          end={250}
          duration={2}
          decimals={0}
          suffix="K"
          enableScrollSpy
          scrollSpyOnce
        />
      ),
      desc: "Deaf People in Hong Kong",
    },
    {
      stat: (
        <CountUp
          start={0}
          end={50}
          duration={2}
          decimals={0}
          enableScrollSpy
          scrollSpyOnce
        />
      ),
      desc: "Active Sign Language Interpreters",
    },
    {
      stat: (
        <>
          <CountUp
            start={0}
            end={3}
            duration={2}
            decimals={0}
            suffix="-"
            enableScrollSpy
            scrollSpyOnce
          />
          <CountUp
            start={0}
            end={4}
            duration={2}
            decimals={0}
            suffix=" Week"
            enableScrollSpy
            scrollSpyOnce
          />
        </>
      ),
      desc: "Lead Time for Bookings",
    },
  ];
  return (
    <>
      <div className="project-1-container">
        <NavMargin bgcolor={"var(--primary-three)"} />
        <div className="project-container">
          <div className="project-landing-page">
            <Fade cascade triggerOnce duration={500}>
              <div className="project-landing-content">
                <h1>
                  <span>Real-time</span> AI Sign Language Translation
                </h1>
                <p>
                  Join our mission to bridge the communication gap with our HKSL
                  Translation App, making communities more accessible for the
                  deaf.
                </p>
                <div className="project-landing-content-buttons">
                  <AttentionSeeker
                    effect="pulse"
                    cascade
                    triggerOnce
                    fraction={0.1}
                  >
                    <NavLink to="/sign-up">
                      <button
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        Subscribe To Our Newsletter!
                      </button>
                    </NavLink>
                    <NavLink to="/contact-us">
                      <button
                        className="contact-us-btn-project"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        Contact Us <FaArrowRightLong />
                      </button>
                    </NavLink>
                  </AttentionSeeker>
                </div>
              </div>
            </Fade>
            <Zoom triggerOnce duration={500} delay={500}>
              <div className="project-page-landing-img">
                <img src={landing_img} alt="Landing Page" />
              </div>
            </Zoom>
          </div>
          <div className="silent-struggle-container">
            <Zoom triggerOnce duration={400}>
              <div className="silent-struggle-image">
                <img src={silent_struggle} alt="silent-struggle-image" />
              </div>
            </Zoom>
            <div className="silent-struggle-content">
              <Fade cascade triggerOnce duration={400}>
                <h3>
                  <FaSquare /> Overcoming Communication Challenges for the deaf
                </h3>
                <h1>The Silent Struggle</h1>
                <p>
                  There are many communication barriers for the deaf and hard of
                  hearing to obtain information in daily life, ranging from
                  watching TV at home to hearing public announcements and
                  sitting in lectures. A large proportion of them have
                  difficulty in reading and writing. They are majorly dependent
                  on lip reading - which is also not always available.
                </p>
              </Fade>
            </div>
          </div>
          <div className="project-page-problem-container">
            {stats.map((stat) => {
              return (
                <>
                  <div className="problem-card-projects-page">
                    <h2>{stat.stat}</h2>
                    <p>{stat.desc}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="project-info-container">
            <Slide triggerOnce duration={500}>
              <div className="project-info-content">
                <h3>
                  <FaSquare /> ENABLING SOCIAL INCLUSION THROUGH TECHNOLOGY
                </h3>
                <h1>Hong Kong Sign Language Translation for All</h1>
                <div className="project-info-content-features">
                  <Fade cascade triggerOnce duration={500}>
                    {features.map((feature) => {
                      return (
                        <>
                          <div className="project-content-feature">
                            <div className="project-content-feature-icons">
                              {feature.icons.map((icon) => {
                                return <>{icon.icon}</>;
                              })}
                            </div>
                            <p>{feature.text}</p>
                          </div>
                        </>
                      );
                    })}
                  </Fade>
                </div>
              </div>
            </Slide>
            <Zoom triggerOnce duration={500}>
              <div className="project-info-image">
                <img src={project_info_image} alt="Project Information" />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <div className="tech-partners-project-1-container">
        <TechnologyPartners bgcolor={"var(--primary-three)"} />
      </div>
      <img
        src={vector_graphic}
        alt="vector graphic"
        style={{ transform: "rotateX(180deg) translateY(1px)" }}
        className="vector-graphic"
      />
      <Footer showVectorFiller={false} />
    </>
  );
}

export default Project1;
