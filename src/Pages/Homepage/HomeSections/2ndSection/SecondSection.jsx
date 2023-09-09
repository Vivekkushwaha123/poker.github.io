import React from "react";
import Carousel from "./Carousel";
import Upper from "./Upper";
import Bottom from "./Bottom";

const SecondSection = () => {
  return (
    <div className="SecondSection bg-[var(--primaryLight)] py-[5%] w-[100%] flex flex-col justify-center items-center gap-16">
      <Upper />
      <Carousel />
    </div>
  );
};

export default SecondSection;
