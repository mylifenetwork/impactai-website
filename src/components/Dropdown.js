import React from "react";
import data from "../data/projects";
import { NavLink } from "react-router-dom";
import {} from "../style/dropdown.css";
function Dropdown() {
  return (
    <>
      <div className="project-menu-full-screen">
        <ul>
          {data ? (
            data.map((project) => {
              return (
                <NavLink to={project.route}>
                  <li>{project.name}</li>
                </NavLink>
              );
            })
          ) : (
            <li>NO PROJECT CURRENTLY ONGOING</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
