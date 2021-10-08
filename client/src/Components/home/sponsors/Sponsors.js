import React from "react";
import { SponsorsData } from "../carousel/SliderData";
import "./sponsors.css";
const Sponsors = () => {
  return (
    <div className="sponsorsContainer">
      <div className="sponsorsWrapper">
        <h2>Nos Sponsors</h2>
        {SponsorsData.map((el, i) => (
          <div key={i}>
            <img
              className="sponsorsItems"
              src={el.image}
              alt="sponsors"
              width="100px"
              height="50px"
            />
            {/* <span >{el.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
