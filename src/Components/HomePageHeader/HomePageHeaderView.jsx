import React from "react";
import Button from "../Button/Button";
import { pokerLogo } from "../../assests";
import { NavLink } from "react-router-dom";
import { HOMEPAGE_NAVBAR } from "../../Constant/constant";

const HomePageHeaderView = () => {
  return (
    <header className="bg-black  h-[75px] flex items-center justify-evenly w-full">
      <div className="pokerLogo">
        <img className="" alt="pokerlogo" src={pokerLogo} />
      </div>
      <div className="flex w-3/5 items-center justify-evenly">
        {HOMEPAGE_NAVBAR?.map((ele, i) => (
          <NavLink
            key={i}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[16px] font-biz-udpgothic text-darkgray text-center inline-block w-[110px] h-4 shrink-0"
            to="/"
          >
            {" "}
            初めての方
          </NavLink>
        ))}
      </div>
      <div className="flex items-center justify-evenly w-1/4">
        <Button btnName="会員登録" btnClassName="rounded-3xl w-[105.5px]" />
        <Button
          btnName="ログイン"
          btnClassName="bg-black text-white  border border-white w-[105.5px] rounded-3xl "
        />
      </div>
    </header>
  );
};

export default HomePageHeaderView;
