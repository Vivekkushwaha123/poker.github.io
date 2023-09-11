import React from "react";
import Button from "../Button/Button";

const ArticleCard = () => {
  return (
    <div className="artical-wrapper w-full">
      <div className="gap-[13px] w-full text-left text-[14.54px] text-darkslategray-200 font-biz-udpgothic">
        {[1, 2, 3, 4]?.map((ele, i) => (
          <div className="article-card-wrapper w-full" key={i}>
            <div className="w-full flex flex-row items-center justify-between">
              2023.08.01
              <div className=" gray-line bg-gainsboro-200 w-3/4  h-[27.45px] my-3" />
            </div>
            <div className=" mt-2 bg-gainsboro-100  h-[1.94px]" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
          btnName="もっと見る"
          btnClassName=" text-black w-[140px] bg-white rounded-[145.43px]  flex flex-row items-center justify-center border-[1px] border-solid border-mediumslateblue-200"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
