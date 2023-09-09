import React from "react";
import Herosection from "./HomeSections/Herosection/Herosection";
import "./Homepage.scss";
import FirstSection from "./HomeSections/1stSection/FirstSection";
import SecondSection from "./HomeSections/2ndSection/SecondSection";
import ThirdSection from "./HomeSections/3rdSection/ThirdSection";
import FourthSection from "./HomeSections/4thSection/FourthSection";
import FifthSection from "./HomeSections/5thSection/FifthSection";
import SixthSection from "./HomeSections/6thSection/SixthSection";

const HomePageView = () => {
  return (
    <div className="Homepage ">
      <Herosection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
};

export default HomePageView;
