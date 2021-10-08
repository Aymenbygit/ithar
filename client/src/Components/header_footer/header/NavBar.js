import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../assests/navbar/logo.png";

const NavBar = () => {
  const [navBtn, setNavBtn] = useState(false);
  const handleToggleNav = () => {
    setNavBtn(!navBtn);
  };

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <section className="wrapper">
            <h1 className="brand">
              <img className="brand-link" src={Logo} width="60px" alt="logo" />
            </h1>
            <button
              type="button"
              className={navBtn ? "burger active" : "burger"}
              id="burger"
              onClick={handleToggleNav}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
            <div
              className={navBtn ? "menu active" : "menu"}
              style={
                navBtn
                  ? { maxHeight: document.documentElement.scrollHeight + "px" }
                  : {}
              }
              id="menu"
            >
              <ul className="menu-inner">
                <li className="menu-item">
                  <Link to="/" className="menu-link">
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact-us" className="menu-link">
                    الاتصال
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/AboutUs" className="menu-link">
                    معلومات عنا
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/LoiAssociation" className="menu-link">
                    قانون الجمعية
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/FamilyNotif" className="menu-link">
                    إعلام عن عائلة{" "}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/Reports" className="menu-link">
                    التقارير{" "}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/Objectives" className="menu-link">
                    الأهداف{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={navBtn ? "menu active" : "menu"}
              style={
                navBtn
                  ? { maxHeight: document.documentElement.scrollHeight + "px" }
                  : {}
              }
              id="menu"
            >
              <ul className="menu-inner">
                <li className="signUpIn">
                  <Link to="/signin" className="menu-link">
                    الدخول{" "}
                  </Link>
                  <span> &nbsp; </span>
                  <Link to="/signup" className="menu-link">
                    التسجيل{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
