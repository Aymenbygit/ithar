import React from "react";
import "./family.css";
import DonationImg from "../../../assests/navbar/donation.jpeg";
const Family = () => {
  return (
    <div className="familyContainer">
      <h1>Family</h1>
      <div className="grid-container-family">
        <div>
          <img className="Ytvideo" src={DonationImg} alt="Ytvideo" />
        </div>
        <div className="familyWrapper">
          <div className="familyWrapperItem">
            <div className="familyItems">
              <p>Santé</p>
              <span>500</span>
            </div>
            <div className="familyItems">
              <p>A</p>
              <span>500</span>
            </div>
          </div>
          <div>
            <div className="familyItems">
              <p>B</p>
              <span>500</span>
            </div>
            <div className="familyItems">
              <p>C</p>
              <span>500</span>
            </div>
          </div>
        </div>
      </div>
      <h3>500 Family</h3>
    </div>
  );
};

export default Family;
