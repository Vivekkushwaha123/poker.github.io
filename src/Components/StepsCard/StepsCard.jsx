import React from "react";
import FormCard from "../FormCard/FormCard";
import { rightArrow } from "../../assests";

const StepsCard = ({ number, img, text1, text2, text3, isArrow, btnName }) => {
  return (
    <div className="step-card-wrapper flex">
      <div className="relative w-[288.46px] h-[417.85px] rounded-3xl bg-white">
        <div className="absolute top-[31.87px] left-[72.11px] w-[144.23px] h-[138.95px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[28.14px] w-[116.09px] h-[138.95px] object-cover"
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
          <button className="cursor-pointer [border:none] text-[13.19px] text-white py-2.5 px-[15px] font-bold bg-mediumslateblue-200  rounded-8xs">
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
      {isArrow && (
        <div className="flex flex-row items-center ml-10 justify-start">
          <img className="relative w-6 h-[39.14px]" alt="" src={rightArrow} />
          <img
            className="relative w-[18px] h-[29.11px]"
            alt=""
            src={rightArrow}
          />
        </div>
      )}
    </div>
  );
};

export default StepsCard;
