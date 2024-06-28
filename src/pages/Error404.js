import React from "react";
import NavMargin from "../components/NavMargin";
import {} from "../style/error404.css";
function Error404() {
  return (
    <>
      <div className="error404-container">
        <NavMargin bgcolor={"none"} />
        <div className="message_container">
          <h1>ERROR 404. PAGE NOT FOUND</h1>
        </div>
      </div>
    </>
  );
}

export default Error404;
