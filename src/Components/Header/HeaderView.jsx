import React from "react";
import "./style.scss";
import Button from "../Button/Button";
import { pokerLogo } from "../../assests";
import { DASBBOARD_SIDEBAR_MENU } from "../../Constant/constant";
const HeaderView = ({
  handleHumburgerClick,
  isHumburgerClicked,
  handleNavigate,
}) => {
  return (
    <div
      className={`dashboard-menu-wrapper  ${
        isHumburgerClicked && "bg-zinc-800"
      }`}
    >
      <div className={`dashboard-wrapper  flex items-center justify-between`}>
        <div className="logo-wrapper">
          <img src={pokerLogo} alt="logo" loading="lazy" />
        </div>
        <div className="btn-wrapper flex items-center ">
          <span className="dashboard-wrapper-name">様ダッシュボード</span>
          <Button btnName="Top Page" />
        </div>
        <div className="humburger-menu-btn">
          <div
            className={`container ${isHumburgerClicked && "change"}`}
            onClick={handleHumburgerClick}
          >
            <div className={`bar1 ${isHumburgerClicked ? "bg-white" : "bg-black"}`}></div>
            <div className={`bar2 ${isHumburgerClicked ? "bg-white" : "bg-black"}`}></div>
            <div className={`bar3 ${isHumburgerClicked ? "bg-white" : "bg-black"}`}></div>
          </div>
        </div>
      </div>
      {isHumburgerClicked && (
        <div className="main-menu-wrapper">
          <div className="menu-content  bg-zinc-800  overlay-content">
            {DASBBOARD_SIDEBAR_MENU?.map((obj, i) => (
              <div
                value={obj?.text}
                key={i}
                className="flex px-10 border-b border-black	sidebar-menu-view py-3 cursor-pointer"
                onClick={() => handleNavigate(obj?.route)}
              >
                <img
                  src={obj?.img}
                  className="sidebar-icon mr-3"
                  alt={obj?.text}
                />
                <span className="sidebar-font text-white">{obj?.text}</span>
              </div>
            ))}
          </div>
          <div className="menu-footer py-4 flex justify-evenly items-center">
            <span className="dashboard-wrapper-name text-white">
              様ダッシュボード
            </span>
            <Button btnName="Top Page" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderView;
