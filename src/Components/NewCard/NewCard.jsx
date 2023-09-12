import React from "react";
import Button from "../Button/Button";
import { NEWS_BUTTON_NAME } from "../../Constant/constant";

const NewCard = () => {
  return (
    <div className="text-[14.54px] w-full text-darkslategray-200 font-biz-udpgothic">
      <h2 className="text-center text-[20px] mb-5">News</h2>
      {NEWS_BUTTON_NAME?.map((ele, i) => (
        <div className="new-card-wrapper" key={i}>
          <div className="flex card-wrapper flex-row items-center justify-start gap-[13.57px]">
            <div className=" leading-[23.27px] inline-block w-1/4 shrink-0">
              2023.08.01
            </div>
            <Button btnName={ele} btnClassName="rounded-3xl w-1/4" />
            <div className=" grey-line bg-gainsboro-200 w-1/2 h-[27.15px] my-3" />
          </div>
          <div className=" mt-2 bg-gainsboro-100 w-full h-[1.94px]" />
        </div>
      ))}
      <div className="flex justify-center items-center mt-10">
        <Button
          btnName="もっと見る"
          btnClassName=" text-black w-[140px] bg-white rounded-[145.43px]  flex flex-row items-center justify-center border-[1px] border-solid border-mediumslateblue-200"
        />
      </div>
    </div>
  );
};

export default NewCard;
