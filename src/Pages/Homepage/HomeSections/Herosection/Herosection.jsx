import React from "react";
import "./Herosection.scss";
import { NavLink } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="Herosection ">
      <div className="overlay"></div>
      <img src="./assets/Poker1.jpg" alt="" className="Backgroundimage" />
      <div className="Herocontent flex flex-col items-center gap-4">
        <h1 className="title">ポーカーバックスへようこそ</h1>
        <NavLink className="Herobutton text-[24px] FilledBtn" to="/Howtoplay">
          遊び方
        </NavLink>
      </div>
    </div>
  );
};

export default Herosection;
