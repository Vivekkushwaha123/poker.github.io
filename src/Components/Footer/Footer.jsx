import React from "react";
import { NavLink } from "react-router-dom";
import "../Elements/Elements.scss";
import UpperFooter from "./UpperFooter";

const Footer = () => {
  return (
    <div className="Footer relative mt-[150px]">
      <UpperFooter />
      <footer className="text-gray-600 body-font bg-[var(--primaryLight)]">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap md:text-center text-center -mb-20 justify-between gap-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <NavLink to="/">
                <img src="/assets/PockerBacks.png" alt="Logo" />
              </NavLink>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-[var(--primaryColor)] tracking-widest text-sm mb-3">
                PokerBacksに関して
              </h2>
              <nav className="flex flex-col gap-2 list-none mb-10">
                <li>
                  <NavLink
                    className="text-[var(--secondaryColor)] hover:text-[--light]"
                    to="/termsofuse"
                  >
                    利用規約
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-[var(--secondaryColor)] hover:text-[--light]"
                    to="/privarypolicy"
                  >
                    個人情報保護
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-[var(--primaryColor)] tracking-widest text-sm mb-3">
                おすすめのポーカーアプリ
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-2">
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    WPT Global
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    KK Poker
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-[var(--primaryColor)] tracking-widest text-sm mb-3">
                ご利用方法
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-2">
                <li>
                  <NavLink
                    className="text-[var(--secondaryColor)] hover:text-[--light]"
                    to="/registration"
                  >
                    ユーザー登録方法
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    ご利用手順
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    キャッシュバック出金方法
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    ご紹介システム
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-[var(--primaryColor)] tracking-widest text-sm mb-3">
                お問い合わせ
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-2">
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    良くある質問
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-[var(--secondaryColor)] hover:text-[--light]">
                    お問合せ
                  </NavLink>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[var(--primaryColor)]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-[var(--light)] text-sm text-center sm:text-left">
              © 2023 Copyrights —
              <NavLink
                href="https://twitter.com/knyttneve"
                className="text-[var(--light)] ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                PokerBacks
              </NavLink>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
