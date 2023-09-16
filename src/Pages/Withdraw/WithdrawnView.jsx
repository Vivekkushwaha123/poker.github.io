import React from "react";
import { Button, DataViewTableContainer } from "../../Components";

import "./styles.scss";

const WithdrawnView = () => {
  return (
    <div className="w-11/12 ">
      <div className="table-1 flex flex-col p-5 px-10 bg-white">
        <h1 className="flex justify-center items-center">アカウント情報</h1>
        <table className="user-table-wrapper mt-10">
          <tbody>
            <tr>
              <td>メールアドレス</td>
              <td>smile@gmail.com</td>
              <td>
                <Button
                  btnName="確定"
                  btnClassName="bg-white border border-purple-900 text-black"
                />
              </td>
            </tr>
            <tr>
              <td>ユーザid</td>
              <td>000-0000-0000</td>
            </tr>
            <tr>
              <td>WPTGlobalアカウントid *</td>
              <td>12345</td>
            </tr>
            <tr>
              <td>出金先アドレス帳 *</td>
              <td>kauhrhaelweawi54409fjgos</td>
              <td>
                <Button
                  btnName="確定"
                  btnClassName="bg-white border border-purple-900 text-black"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <DataViewTableContainer />
    </div>
  );
};

export default WithdrawnView;
