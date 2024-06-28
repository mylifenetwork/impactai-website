import React, { useState } from "react";
import {} from "../style/menu.css";
// import DarkModeToggle from "./DarkModeToggle";
import { IoIosArrowDown } from "react-icons/io";
import data from "../data/projects";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
function Menu({ menuOpen, menuShow }) {
  let [openProjTab, setOpenProjTab] = useState(false);
  let openProjects = () => {
    setOpenProjTab(!openProjTab);
  };
  return (
    <>
      <div
        className={menuOpen ? "menu-container" : "menu-container-hide"}
        style={menuOpen ? { top: `${window.scrollY}` } : {}}
      >
        <div className="menu-backdrop" onClick={menuShow}></div>
        <div className="menu-s">
          <ul className="menu-u-list">
            <li onClick={menuShow} className="menu-item close-menu">
              Close Menu
            </li>
            <Link to="/">
              <li className="menu-item" onClick={menuShow}>
                Home
              </li>
            </Link>
            <li className="menu-item" onClick={openProjects}>
              Projects
              <IoIosArrowDown style={{ transform: "translate(2px,2px)" }} />
            </li>
            <div className="project-list">
              {data ? (
                data.map((project) => {
                  return (
                    <Link to={project.route}>
                      <li
                        className={
                          openProjTab ? "project-menu" : "project-list-hide"
                        }
                        onClick={menuShow}
                      >
                        {project.name}
                      </li>
                    </Link>
                  );
                })
              ) : (
                <li className="project-menu">NO PROJECT CURRENTLY ONGOING</li>
              )}
            </div>
            <Link to="/about-us">
              <li className="menu-item" onClick={menuShow}>
                About Us
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="menu-item" onClick={menuShow}>
                Contact Us
              </li>
            </Link>
            <Link to="/sign-up">
              <li className="menu-item sign-up" onClick={menuShow}>
                Sign Up
              </li>
            </Link>
            <li className="menu-item">
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
