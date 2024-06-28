import React from "react";
import footercontent from "../data/footercontent";
import { NavLink } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {} from "../style/footer.css";
import vector_graphic from "../assets/vector_graphic_black_to_primary.png";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

function FooterComponent({ showVectorFiller }) {
  // let scrollToTop = () => {
  //   window.scrollTo({ top: 0 });
  // };
  return (
    <>
      <div className="footer-container">
        <img
          src={vector_graphic}
          className="vector-graphic"
          alt="vector graphic"
          style={
            showVectorFiller
              ? {
                  display: "block",
                  transform: "rotateX(180deg) translateY(16px)",
                }
              : { display: "none" }
          }
        />
        <AttentionSeeker triggerOnce effect="pulse" duration={600}>
          <div className="introduction-slogan">
            <h1>
              <span>Building Bridges</span> with Smart Technology
            </h1>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect="pulse" triggerOnce>
          <div className="sign-up-button-footer-div">
            <NavLink to="/sign-up">
              <button>
                Sign Up for the Newsletter Now! <IoIosArrowDroprightCircle />
              </button>
            </NavLink>
          </div>
        </AttentionSeeker>
        <div className="footer-container-links">
          {footercontent.map((footercont) => {
            return (
              <div className="footer-column">
                <h3>{footercont.title}</h3>
                <ul>
                  {footercont.contents.map((sub) => {
                    return (
                      <li>
                        {sub.route[0] === "#" ? (
                          <a
                            href={
                              window.location.pathname === sub.route
                                ? "#"
                                : sub.route
                            }
                          >
                            {sub.sub_title}
                          </a>
                        ) : (
                          <NavLink to={sub.route}>{sub.sub_title}</NavLink>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footer-under-links">
          <div className="socials-footer">
            <ul>
              <li>
                <NavLink
                  to="https://www.linkedin.com/company/impact-ai-hk "
                  target="_blank"
                >
                  <FaLinkedin />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.xai.hk/" target="_blank">
                  <FaLink />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="location-footer">
            <p>
              <IoMdPin /> Unit 740, Building 19W, HKSTP, Pak Shek Kok, NT, HK
            </p>
          </div>
        </div>
        <div className="copyright-footer" style={{display:'flex',flexDirection:'column'}}>
          <p style={{color:'var(--accent)', pointerEvents:'none'}}>Designed by Sameer Gupta</p>
          <p>
            <FaRegCopyright /> Copyright @ 2024 | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
