import React from "react";
import Adherent from "./adherent/Adherent";
import ImageSlider from "./carousel/Carousel";
import { SliderData } from "./carousel/SliderData";
import Family from "./family/Family";
import LastEvent from "./lastEvent/LastEvent";
import Sponsors from "./sponsors/Sponsors";
import Video from "./video/Video";

const Home = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <LastEvent />
      <Adherent />
      <Family />
      <Video />
      <Sponsors />
    </div>
  );
};

export default Home;
