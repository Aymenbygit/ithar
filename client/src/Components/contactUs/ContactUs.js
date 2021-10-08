import React from "react";
import "./contactUs.css";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <h1>Contact Us</h1>
      <div className="contactUsWrapper">
        <div className="contactInformation">
          <ul className="">
            <li className="contactInformationItem">
              <GiPositionMarker />
              <span> Address:&nbsp;</span>
              <p>
                4013, Messadine <br /> Msaken,Sousse
              </p>
            </li>
            <li className="contactInformationItem">
              <MdEmail /> <span> Email:&nbsp;</span>
              <p>
                {" "}
                <a href="mailto:aymenby30@gmail.com" style={{ color: "white" }}>
                  aymenby30@gmail.com
                </a>
              </p>
            </li>
            <li className="contactInformationItem">
              <FaPhoneAlt /> <span> Phone:&nbsp;</span>
              <p>
                <a href="tel:26 398 196" style={{ color: "white" }}>
                  26 398 196
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <from>
            <div>
              <input placeholder="Name" />
              <input placeholder="Last Name" />
            </div>
            <div>
              <input placeholder="Subject" />
            </div>
            <div>
              <textarea
                style={{ resize: "vertical" }}
                cols={30}
                rows={10}
                placeholder="Message"
              />
            </div>
            <button>Send Message</button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
