import React from "react";
import "./FourthSection.scss";

const FourthSection = () => {
  return (
    <div className="FourthSection bg-[var(--primaryLight)] p-[5%]">
      <section className="text-gray-600 body-font">
        <div className="container  py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-semibold text-[56px] text-[var(--text)]">
              今すぐ登録してレーキキャッシュバックを受けよう！
            </h1>
            <p className="leading-relaxed mt-4">
              今すぐサインアップして、ポーカープレイでレーキキャッシュバックを獲得しましょう!
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-[var(--light)] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
            <h2 className="text-gray-900 text-lg font-semibold title-font mb-5">
              サインアップ
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                電子メール
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                パスワード
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="FilledBtn text-lg">登録する</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourthSection;
