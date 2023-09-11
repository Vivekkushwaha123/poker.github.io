import React from "react";
import FormCard from "../FormCard/FormCard";
import { rightArrow } from "../../assests";

const StepsCard = ({ number, img, text1, text2, text3, isArrow, btnName }) => {
  return (
    <div className="step-card-wrapper relative  ">
      <div className="bg-mediumslateblue-200  absolute bottom-[384px] left-5  text-gray-300 w-[65px] flex flex-col justify-evenly items-center rounded-md h-[66px]">
        <span>STEP</span>
        <span>{number}</span>
      </div>
      <div className="card-container justify-evenly h-[417.85px] w-[380] flex flex-col bg-white rounded-3xl">
        <div className=" h-1/3 flex justify-center items-center w-full">
          <img
            height={180}
            width={180}
            className="object-cover"
            alt=""
            src={img}
          />
        </div>
        <div className=" px-7">
          {text1 && <p className="my-3">{text1}</p>}
          {text2 && <p className="my-3">{text2}</p>}
          {text3 && <p className="my-3">{text3}</p>}
        </div>
        <div className="btn-div w-full ">
          <button className="cursor-pointer [border:none]  text-[13.19px] text-white py-5 px-5 font-bold bg-mediumslateblue-200  rounded-8xs">
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
