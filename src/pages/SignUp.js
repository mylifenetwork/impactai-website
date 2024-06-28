import React from "react";
import NavMargin from "../components/NavMargin";
import {} from "../style/signup.css";
function SignUp() {
  let signUpFunction =()=>{

  }
  return (
    <>
      <div className="signup-container">
        <NavMargin bgcolor="var(--primary-five)" />
        <div className="signup-container-landing">
          <h1>
            <span>Sign Up</span> For Our Newsletter!
          </h1>
          <form onSubmit={signUpFunction}>
            <input required type="email" placeholder="Enter Your Email!"/>
            <input type="submit" placeholder="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
