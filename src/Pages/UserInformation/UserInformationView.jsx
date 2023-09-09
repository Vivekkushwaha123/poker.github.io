import React, { useState } from "react";
import { Button, ModalContainer } from "../../Components";
import { useDisclosure } from "@mantine/hooks";

import "./styles.scss";

const UserInformationView = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="user-info-wrapper bg-white w-11/12 px-10 py-5">
      <h1 className="flex justify-center items-center">アカウント情報</h1>
      <table className="user-table-wrapper mt-10">
        <tbody>
          <tr>
            <td >名前</td>
            <td className="second-td">
              <Button
                btnName="堀すみれ"
                btnClassName="bg-white border w-1/2 border-purple-900 text-black"
              />
            </td>
            <td>
              <Button
                btnName="確定"
                btnClassName="bg-white border border-purple-900 text-black"
              />
            </td>
          </tr>
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
            <td>パスワード</td>
            <td>**********</td>
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
            <td>
              <Button
                btnName="確定"
                btnClassName="bg-white border border-purple-900 text-black"
              />
            </td>
          </tr>
          <tr>
            <td>WPTGlobalアカウントid *</td>
            <td>12345</td>
            <td>変更不可</td>
          </tr>
          <tr>
            <td>出金先アドレス帳 *</td>
            <td>kauhrhaelweawi54409fjgos</td>
            <td>
              <Button
                handleClick={open}
                btnName="確定"
                btnClassName="bg-white border border-purple-900 text-black"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="user-info-btn flex items-center justify-center mt-12">
        <Button btnName="口座登録" />
      </div>

      <ModalContainer
        {...{
          opened,
          close,
        }}
      >
        <div className="user-modal-wrapper">
          <h1 className="flex justify-center items-center">アドレス帳</h1>
          <div className="btn flex justify-end">
            <Button btnName="追加" handleClick={() => setIsOpened(true)} />
          </div>
          <div className=" flex justify-evenly my-5">
            <span>追加</span>
            <span>追加</span>
            <span>追加</span>
          </div>
          <hr />
          <div className="flex justify-center items-center mt-5">
            アドレス帳
          </div>
        </div>
      </ModalContainer>
      <ModalContainer opened={isOpened} close={() => setIsOpened(false)}>
        <div className="user-modal-wrapper">
          <h1 className="flex justify-center items-center">アドレス追加</h1>
          <form className=" flex flex-col justify-center items-center gap-5 my-5">
            <div className="input flex flex-col justify-start w-11/12">
              <label htmlFor="アドレス追加">アドレス追加</label>
              <input type="text" name="" id="" className="rounded" />
            </div>
            <div className="input flex flex-col justify-start w-11/12">
              <label htmlFor="アドレス追加">アドレス追加</label>
              <input type="text" name="" id="" className="rounded" />
            </div>
          </form>
          <div className="flex justify-center items-center">
            <div className="btn flex justify-between items-center w-1/2">
              <Button btnName="追加" btnClassName="bg-white border border-purple-900 text-black" />
              <Button btnName="追加" />
            </div>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default UserInformationView;
