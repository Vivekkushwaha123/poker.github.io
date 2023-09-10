import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "../../../Components";
import { eyes } from "../../../assests";
import "./style.scss"

const RegistrationView = ({ handleRegister }) => {
  return (
    <div className="login-main-wrapper flex mt-3 flex-col justify-center items-center">
      <div className="flex flex-col justify-center bg-white px-6  py-12 lg:px-8 border-2 w-[400px]  rounded-3xl border-black-300">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            PokerBacksログイン
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="" action="#" method="POST">
            <Input
              htmlFor="email"
              name="email"
              label="パスワード"
              type="email"
              id="email"
              inputClassName="w-[348px] mb-5 common-input"
            />
            <Input
              htmlFor="password"
              name="password"
              label="パスワード"
              type="password"
              id="password"
              inputClassName="w-[348px] mb-5 common-input"
            />

            <label htmlFor="パスワード " className="mb-2">パスワード</label>
            <div
              className="password-div-wrapper mb-5 mt-2 flex justify-between rounded-md px-5  py-1 text-gray-900  border border-l border-black placeholder:text-gray-400"
            >
              <input
                htmlFor="password"
                name="password"
                label="パスワード"
                type="password"
                id="password"
                className="w-11/12  common-input-2"
              />
              <img src={eyes} alt="eye" srcSet="" width={20} />
            </div>

            <div className="flex items-center flex-row justify-evenly  mt-5">
              <div className="flex items-center">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="checkboxChecked"
                />
                <label class="" for="checkboxChecked">
                  利用規約に同意します
                </label>
              </div>
              <Button
                btnId="submit-btn"
                btnName="新規登録する"
                id="submit-btn"
                handleClick={handleRegister}
                // type="submit"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="link flex flex-col justify-center items-center gap-6 mt-4">
        <NavLink to="/forgot-password">パスワードを忘れた方はこちら</NavLink>
        <NavLink to="/forgot-password">新規会員登録する</NavLink>
      </div>
    </div>
  );
};

export default RegistrationView;
