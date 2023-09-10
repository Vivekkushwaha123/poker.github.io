import React from "react";
import "./styles.scss";
import { Button } from "../../Components";

const MyAccountView = () => {
  return (
    <div className="account-page-wrapper py-6 w-11/12">
      <div className="account-title flex justify-center items-center">
        口座登録{" "}
      </div>
      <form action="" className="account-form flex flex-col justify-center mt-10 ">
        <div className="flex form-div-wrapper justify-around">
          <div className="form-select flex flex-col w-2/5 ">
            <label htmlFor="dropdown">アプリ</label>
            <select
              name="dropdown"
              id="account-dropdown"
              className="account-dropdown p-2"
            >
              {[1, 2, 3, 4, 5]?.map((ele, i) => (
                <option value="ポーカーアプリを選択" key={i}>
                  ポーカーアプリを選択
                </option>
              ))}
            </select>
          </div>
          <div className="form-text flex flex-col">
            <label htmlFor="" className="form-input-label">
              ユーザ
            </label>
            <input
              type="text"
              name=""
              id=""
              className="form-input px-3 py-5"
            />
          </div>
        </div>
        <div className="account-btn flex justify-center items-center mt-10">
          <Button btnName="確定" />
        </div>
      </form>
    </div>
  );
};

export default MyAccountView;
