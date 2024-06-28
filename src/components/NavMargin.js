import React, { useState } from "react";
function NavMargin({ bgcolor }) {
  let [height,setHeight]=useState(window.outerHeight>480)
  window.addEventListener('resize',(()=>{
    setHeight(window.outerHeight>480)
  }))
  const nav_margin = {
    height: height?"100px":'200px',
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
