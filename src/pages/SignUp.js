import React from "react";
import NavMargin from "../components/NavMargin";
import {} from "../style/signup.css";
import { NavLink } from "react-router-dom";
function SignUp() {
  // let signUpFunction =()=>{

  // }
  return (
    <>
      <div className="signup-container">
        <NavMargin bgcolor="var(--primary-five)" />
        <div className="signup-container-landing">
          {/* <h1>
            <span>Sign Up</span> For Our Newsletter!
          </h1>
          <form onSubmit={signUpFunction}>
            <input required type="email" placeholder="Enter Your Email!"/>
            <input type="submit" placeholder="Submit"/>
          </form> */}
          <h1>
            <span>Stay Tuned</span> With Us On Linkedin
          </h1>
          {/* <form onSubmit={signUpFunction}>
            <input required type="email" placeholder="Enter Your Email!"/> */}
            <NavLink to='https://www.linkedin.com/company/impact-ai-hk' target="_blank" rel="noreferrer">
            <button className="follow-button-signup">Stay Connected</button>
            </NavLink>
            {/* <input type="submit" placeholder="Submit!"/> */}
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
