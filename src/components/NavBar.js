import React, { useEffect, useState } from "react";
import logo from "../assets/impact-ai-logo.png";
import {} from "../style/navbar.css";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
// import { Slide } from "react-awesome-reveal";
import DarkMode from "./DarkMode";
function NavBar({ showProjMenu, setShowProjMenu }) {
  var initStat = window.innerWidth < 992;
  const [menuOpened, setMenuOpened] = useState(false);
  const [smallNav, setSmallNav] = useState(initStat);
  const [sticky, setSticky] = useState(false);
  let showMenu = () => {
    setMenuOpened(!menuOpened);
  };
  const style_project_menu = {
    display: showProjMenu ? "block" : "none",
    top: "69px",
    left: "30vw",
  };
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    const handleNavType = () => {
      setSmallNav(window.innerWidth < 992);
      setMenuOpened(false);
      setShowProjMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleNavType);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleNavType);
    };
  });
  let showProjectMenu = () => {
    setShowProjMenu(!showProjMenu);
  };
  let signUp = () => {
    /**Null function */
  };
  return (
    <>
        <div
          className={menuOpened ? "container " : ""}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className={sticky ? "nav-container nat" : "nav-container at"}>
            <div className="nav-logo">
              <NavLink to="/">
                <img src={logo} alt="Impact AI Logo" />
              </NavLink>
            </div>
            <div className={smallNav ? "hide-nav-list" : "nav-list"}>
              <ul className="nav-unordered-list">
                <li className="nav-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item" onClick={showProjectMenu}>
                  <NavLink
                    style={
                      showProjMenu
                        ? { color: "var(--secondary" }
                        : { color: "var(--tertiary-light)" }
                    }
                  >
                    Projects{" "}
                    <IoIosArrowDown
                      style={{ transform: "translate(2px,2px)" }}
                    />
                  </NavLink>
                  <div
                    className="dropdown-container"
                    style={style_project_menu}
                  >
                    <Dropdown />
                  </div>
                </li>

                <li className="nav-item">
                  <NavLink to="/about-us">About Us </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="contact-us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className={smallNav ? "hide-nav-right" : "nav-right"}>
              <NavLink to="sign-up">
                <Button name="Sign Up" clickFunction={signUp} />
              </NavLink>
              <DarkMode/>
            </div>
            <div className={smallNav ? "menu" : "hide-menu"}>
              <button onClick={showMenu}>
                {menuOpened ? (
                  <ImCross style={{ fontSize: "20px" }} />
                ) : (
                  <IoMenu />
                )}
              </button>
            </div>
          </div>
          <Menu menuOpen={menuOpened} menuShow={showMenu} />
        </div>
    </>
  );
}

export default NavBar;
