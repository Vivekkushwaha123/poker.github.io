import React from "react";
import { NavLink } from "react-router-dom";
import { Input, Button } from "../../../Components";
import { eyes } from "../../../assests";
import "./styles.scss"

const LoginView = ({handleLogin}) => (
  <div className="login-main-wrapper  flex h-screen flex-col justify-center items-center ">
    <div className="flex flex-col justify-center bg-white px-6 py-12 lg:px-8 border-2  rounded-3xl border-black-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          PokerBacksログイン
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="" action="#" method="POST">
          <Input
            htmlFor="email"
            name="email"
            label="メールアドレス"
            type="email"
            id="email"
            inputClassName="mb-5 border border-1 border-black common-input w-[280px]"
          />

          <label htmlFor="パスワード">パスワード</label>
          <div style={{margin: 0}} className="password-div-wrapper m-0 flex justify-between rounded-md px-5  py-1 text-gray-900  border border-l border-black placeholder:text-gray-400">
            <input
              htmlFor="password"
              name="password"
              label="パスワード"
              type="password"
              id="password"
              className="w-11/12 border-none common-input-2"
            />
            <img src={eyes} alt="eye" srcSet="" width={20} />
          </div>

          <div className="flex justify-end mt-5">
            <Button
              btnId="submit-btn"
              btnName="ログインする"
              id="submit-btn"
              handleClick = {handleLogin}
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

export default LoginView;
