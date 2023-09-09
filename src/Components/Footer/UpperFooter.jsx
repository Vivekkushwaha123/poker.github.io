import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import "../Elements/Elements.scss";

const UpperFooter = () => {
  return (
    <div className="UpperFooter flex flex-col justify-center items-center gap-4 p-8 shadow-md w-[70vw]  rounded-[24px] absolute bg-[var(--light)] top-[-150px] left-[50%] translate-x-[-50%] border-[var(--primaryColor)]">
      <div className="title">
        <h1 className=" font-semibold text-[42px]">
          ポーカーバックのキャッシュバックを請求する
        </h1>
      </div>
      <NavLink className="JoinNow FilledBtn" to="/registration">
        今すぐ登録
      </NavLink>
      <div className="overlay"></div>
    </div>
  );
};

export default UpperFooter;
