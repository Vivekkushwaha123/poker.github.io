import React from "react";
import { blackLine, kkpokerlogo, wptLogo } from "../../assests";

const RecoomededPokerSection = () => {
  return (
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-black font-extrabold">おすすめのポーカーアプリ</h1>
        <div className="flex flex-row items-center justify-start gap-[79px]">
          <img alt="" src={wptLogo} />
          <img alt="" src={blackLine} />
          <img alt="" src={kkpokerlogo} />
        </div>
      </div>
  );
};

export default RecoomededPokerSection;
