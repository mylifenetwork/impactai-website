import React from "react";
import {} from "../style/button.css";

function Button({ name, clickFunction }) {
  return (
    <>
      <button className="nav-sign-up" onClick={clickFunction}>
        {name}
      </button>
    </>
  );
}

export default Button;
