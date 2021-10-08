import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/navbar/logo.png";

const SignIn = () => {
  return (
    <div className="container">
      <div className="SignUpContainer">
        <div className="login">
          <h1 className="title">Sign In</h1>
          <img className="logo" src={Logo} alt="logo" />

          <label>Email</label>
          <input type="text" placeholder="Enter your email address" />

          <label>Password</label>
          <input type="text" placeholder="Enter your password" />

          <button className="login-button">Log in</button>
          <span className="signup">
            Can’t log in? ∙{" "}
            <Link className="SignLink" to="/signup">
              {" "}
              Sign up
            </Link>{" "}
            for an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
