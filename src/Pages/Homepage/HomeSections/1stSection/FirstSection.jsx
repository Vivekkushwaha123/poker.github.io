import React from "react";
import "./FirstSection.scss";

const FirstSection = () => {
  return (
    <div className="FirstSection p-[5%] grid grid-cols-2 bg-[]">
      <div className="title text-left ">
        <h3 className="text-[24px] font-semibold ">おすすめのポーカーアプリ</h3>
      </div>
      <div className="Logos grid grid-cols-2 justify-center items-center">
        <div className="Wpt">
          <img className="WptLogo" src="./assets/WPt 1.png" alt="" />
        </div>

        <div className="KKpoker">
          <img
            className="KKpokerLogo"
            src="./assets/ダウンロード 1 1.png"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
