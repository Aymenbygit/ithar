import React from "react";
import "./signup.css";
import Logo from "../../assests/navbar/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <div className="SignUpContainer">
        <div className="login">
          <h1 className="title">Sign Up</h1>
          <img className="logo" src={Logo} alt="logo" />

          <label>Email</label>
          <input type="text" placeholder="Enter your email address" />

          <label>Password</label>
          <input type="text" placeholder="Enter your password" />

          <label>Confirm Password</label>
          <input type="text" placeholder="Confirm your password" />

          <label>Phone</label>
          <input type="text" placeholder="12345678" />

          <button className="login-button">Sign in</button>
          <span className="signup">
            Have an account? ∙{" "}
            <Link className="SignLink" to="/signin">
              {" "}
              Sign in
            </Link>{" "}
            for an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
