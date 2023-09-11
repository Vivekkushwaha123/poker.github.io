import React from "react";
import { blackLine, kkpokerlogo, wptLogo } from "../../assests";

const RecoomededPokerSection = () => {
  return (
      <div className="flex flex-col  items-center">
        <h1 className="text-black font-extrabold">おすすめのポーカーアプリ</h1>
        <div className="flex flex-row justify-evenly w-3/4">
          <img alt="wptlogo" src={wptLogo} />
          <img alt="blackline" src={blackLine} />
          <img alt="kkpoker" className="-mt-8"  height={250} width={250} src={kkpokerlogo} />
        </div>
      </div>
  );
};

export default RecoomededPokerSection;
