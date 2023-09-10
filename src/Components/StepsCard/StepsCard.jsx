import React from "react";
import FormCard from "../FormCard/FormCard";
import { rightArrow } from "../../assests";

const StepsCard = ({ number, img, text1, text2, text3, isArrow, btnName }) => {
  return (
    <div className="step-card-wrapper w-1/4 flex">
      <div className="relative h-[417.85px] w-full bg-white rounded-3xl">
        <div className="absolute top-[31.87px] left-[72.11px]  h-[138.95px] overflow-hidden">
          <img
            height={200}
            width={200}
            className="object-cover"
            alt=""
            src={img}
          />
        </div>
        <div className="absolute top-[203.78px] left-[19.07px] px-5 overflow-hidden">
          {text1 && <p className="my-3">{text1}</p>}
          {text2 && <p className="my-3">{text2}</p>}
          {text3 && <p className="my-3">{text3}</p>}
        </div>
        <div className="btn-div w-full absolute top-[calc(50%_+_120.69px)]">
          <button className="cursor-pointer [border:none]  text-[13.19px] text-white py-5 px-5 font-bold bg-mediumslateblue-200  rounded-8xs">
            {btnName}
          </button>
        </div>
        <FormCard
          optionText={number}
          propLeft="14.54px"
          propLeft1="calc(50% - 129.68px)"
          propWidth="unset"
        />
      </div>
    </div>
  );
};

export default StepsCard;
