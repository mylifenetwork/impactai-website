import React from "react";
function NavMargin({ bgcolor }) {
  const nav_margin = {
    height: "100px",
    background: bgcolor,
    width: "100%",
  };
  return (
    <>
      <div style={nav_margin} />
    </>
  );
}

export default NavMargin;
