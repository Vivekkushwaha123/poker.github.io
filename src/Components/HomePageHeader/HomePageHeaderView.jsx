import React from "react";
import Button from "../Button/Button";
import { pokerLogo } from "../../assests";
import { NavLink } from "react-router-dom";
import { HOMEPAGE_NAVBAR } from "../../Constant/constant";

import "./styles.scss";

const HomePageHeaderView = ({ isHumburgerClicked, handleHumburgerClick }) => {
  return (
    <div
      className={`header-main-wrapper z-50 ${
        isHumburgerClicked && "bg-white sticky h-[100vh] top-0 overflow-hidden"
      }`}
    >
      <header className="homepage-header-wrapper bg-black h-[75px] flex items-center overflow-hidden justify-between w-full">
        <div className="pokerLogo w-1/4 flex justify-around">
          <img className="" alt="pokerlogo" src={pokerLogo} />
        </div>
        <div className="menu-wrapper flex items-center w-2/4 justify-evenly">
          {HOMEPAGE_NAVBAR?.map((ele, i) => (
            <NavLink
              key={i}
              className="cursor-pointer  bg-[transparent] text-base  font-biz-udpgothic text-darkgray text-center "
              to="/"
            >
              {" "}
              初めての方
            </NavLink>
          ))}
        </div>
        <div className="header-btn flex items-center justify-evenly w-1/4">
          <Button btnName="会員登録" btnClassName="rounded-3xl" />
          <Button
            btnName="ログイン"
            btnClassName="bg-black ml-5 text-white  border border-white rounded-3xl "
          />
        </div>
        <div className="humburger hidden">
          <div className="humburger-menu-btn">
            <div
              className={`container ${isHumburgerClicked && "change"}`}
              onClick={handleHumburgerClick}
            >
              <div className={`bar1 `}></div>
              <div className={`bar2 `}></div>
              <div className={`bar3 `}></div>
            </div>
          </div>
        </div>
      </header>

      {isHumburgerClicked && (
        <div
          className={`flex flex-col mobile-navbar bg-black items-start ${
            isHumburgerClicked &&
            " sticky h-[100vh] pl-20 block top-0 overflow-hidden"
          }`}
        >
          {HOMEPAGE_NAVBAR?.map((ele, i) => (
            <NavLink
              key={i}
              className="cursor-pointer py-5  bg-[transparent] text-base  font-biz-udpgothic text-darkgray text-center "
              to="/"
            >
              {" "}
              初めての方
            </NavLink>
          ))}

          <div className="sm-mobile-500  items-center justify-center ">
            <Button btnName="会員登録" btnClassName="rounded-3xl" />
            <Button
              btnName="ログイン"
              btnClassName="bg-black ml-5 text-white  border border-white rounded-3xl "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageHeaderView;
