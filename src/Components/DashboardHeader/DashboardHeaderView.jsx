import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const DashboardHeaderView = () => {
  return (
    <>
    <div className="Header z-[2000]">

      <div className="Topbar">
        <div className="topbarRow grid grid-cols-12 justify-center items-center">
          <div className="leftCol flex items-center col-span-3">
            <NavLink className="Logolink" to="/">
              <img className="Logo" src="./assets/PockerBacks.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="Navbar col-span-6">
            <div className="NavbarRow grid grid-cols-5  justify-center items-center gap-4">
              <NavLink className="NavLink" to="/pockerbacks">
                ポーカーアプリ
              </NavLink>
              <NavLink className="NavLink">使い方</NavLink>
              <NavLink className="NavLink" to="/campaign">
                キャンペーン
              </NavLink>
              <NavLink className="NavLink" to="/faq">
                良くある質問
              </NavLink>
              <NavLink className="NavLink" to="/contact">
                お問い合わせ
              </NavLink>
            </div>
          </div>
          <div className="rightCol flex justify-end gap-4 items-center col-span-3">
            <NavLink
              className="TopLink Login OutlineBtn min-[768px]:text-[12px] min-[992px]:text-[16px]"
              to="/login"
            >
              ログイン
            </NavLink>
            <NavLink
              className="TopLink Registration FilledBtn min-[768px]:text-[12px] min-[992px]:text-[16px]"
              to="/dashboard"
            >
              登録
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DashboardHeaderView;
