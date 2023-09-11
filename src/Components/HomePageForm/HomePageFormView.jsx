import React from "react";
import { form } from "../../assests";
import "./styles.scss"
const HomePageFormView = () => {
  return (
    <div className="my-20 w-full form-wrapper rounded-[10px] justify-between items-center [background:linear-gradient(94.15deg,_#242c53,_#aa70ff)] h-[452px] flex  px-[84px] box-border  text-8xl text-white">
      <div className="w-11/12">
        <h1 className="m-0  text-inherit leading-[153%] uppercase font-bold font-inherit">
          <p className="m-0">今すぐ登録して</p>
          <p className="m-0">レーキキャッシュバックを受けよう！！</p>
        </h1>
        <div className="form flex justify-start w-full mt-10">
          <div className="flex flex-col items-end justify-end mr-20 w-3/5 gap-[21px]">
            <input
              className=" w-full text-[11.46px] bg-[transparent] rounded-[5.29px]   py-3.5 px-[9px] border-[2px] border-solid border-mediumblue-100"
              type="text"
              placeholder="e-mail address"
            />
            <input
              className="w-full text-[11.46px] bg-[transparent] rounded-[5.29px]   py-[13px] px-[9px] border-[2px] border-solid border-mediumblue-100"
              type="text"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-2/5 gap-[57px]">
            <button className=" text-[14.99px] [border:none] py-[19px] px-[27px] bg-mediumslateblue-200 rounded-[7.05px]   items-center justify-center hover:bg-blueviolet">
              今すぐ簡単登録
            </button>
            <div className="flex flex-row items-center justify-center text-[10.58px]  gap-[11px]">
              <input
                className="cursor-pointer  rounded-[2.65px] bg-gainsboro-200  h-[13.23px]"
                type="checkbox"
              />
              利用規約に同意します
            </div>
          </div>
        </div>
      </div>
      <div className="items-center">
        <img
          className="rounded-[4.41px]  h-[345.67px] object-cover"
          alt=""
          src={form}
        />
      </div>
    </div>
  );
};

export default HomePageFormView;
