import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <h1>Ithar</h1>
        <div className="footerItem">
          <h5>A</h5>
          <p>ABC</p>
          <p>ABC</p>
          <p>ABC</p>
        </div>
        <div className="footerItem">
          <h5>B</h5>
          <p>ABC</p>
          <p>ABC</p>
          <p>ABC</p>
        </div>
        <div className="footerItem">
          <h5>C</h5>
          <p>ABC</p>
          <p>ABC</p>
          <p>ABC</p>
        </div>
        <div className="footerItem">
          <h5>D</h5>
          <p>ABC</p>
          <p>ABC</p>
          <p>ABC</p>
        </div>
      </div>
      <div className="suivez-nous">
        <h4>Follow-us |</h4>
        <span>
          <FaFacebookF />
        </span>{" "}
        <span>
          <FaInstagram />
        </span>{" "}
        <span>
          <FaTwitter />
        </span>{" "}
        <span>
          <FaYoutube />
        </span>{" "}
      </div>
      <div className="copyrightFooter">
        <h5>Copyright 2021 ITHAR</h5>
      </div>
    </div>
  );
};

export default Footer;
