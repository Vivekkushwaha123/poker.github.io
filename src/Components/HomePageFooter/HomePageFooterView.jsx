import React from "react";
import { pokerLogo } from "../../assests";

import "./styles.scss"

const HomePageFooterView = () => {
  return (
    <footer className="homepage-footer-wrapper">
      <div className=" bg-black flex flex-col items-center justify-start py-[100px]">
        <div className="flex flex-col items-center justify-start gap-[59px]">
          <div className="poker-footer-text text-white text-[27px] ">
            今すぐPokerBacksのキャッシュバックに参加する/
          </div>
          <button className="cursor-pointer text-white text-[14px]  [border:none] py-5 px-[30px] bg-mediumslateblue-200 rounded-lg overflow-hidden flex flex-row items-center justify-center">
            登録はこちらから
          </button>
        </div>
        <div className=" footer-main-menu-wrapper flex w-full items-center gap-[56px] mt-10 text-left text-base py-6 px-[200px] text-lightgray">
          <img
            height={61}
            width={179}
            className=" w-1/4 logo-footer-img object-cover"
            alt="logo"
            src={pokerLogo}
          />

          <div className="flex footer-menu-wrapper justify-between w-3/4">
            <div className="flex menu-container flex-col">
              <div className="">■ 企業情報</div>
              <div className="flex flex-col mt-4">
                <li className="my-1">私たちについて</li>
                <li className="my-1">プライバシーポリシー</li>
                <li className="my-1">お知らせ</li>
                <li className="my-1">リスク開示</li>
                <li className="my-1">採用情報</li>
              </div>
            </div>
            <div className="flex menu-container flex-col">
              <div className="">■ サービス</div>
              <div className="flex flex-col mt-4">
                <li className="my-1">KKPOKER</li>
                <li className="my-1"> WPT Groba</li>
              </div>
            </div>
            <div className="flex menu-container flex-col">
              <div className="">■ 企業情報</div>
              <div className="flex flex-col mt-4">
                <li className="my-1">よくある質問</li>
                <li className="my-1">登録方法</li>
                <li className="my-1">出金方法</li>
                <li className="my-1">アフィリエイト</li>
                <li className="my-1">お問い合わせ</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooterView;
