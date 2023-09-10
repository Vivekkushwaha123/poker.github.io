import { Button, Input, ModalContainer } from "../../Components";
import "./styles.scss";

const SavingsView = ({
  isModal1Open,
  setIsModal1Open,
  isModal2Open,
  setIsModal2Open,
  isModal3Open,
  setIsModal3Open,
}) => {
  return (
    <div className={`saving-main-wrapper  bg-white h-auto  p-3  w-11/12`}>
      <h1 className="flex justify-center items-center mt-6">出金情報</h1>
      <form className="savings-form flex flex-col mt-6">
        <div className="saving-form-wrapper flex justify-around items-center mt-10">
          <label>現在の出金可能残高</label>
          <input
            className="saving-input"
            type="text"
            name=""
            id=""
            placeholder="$12345"
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <Button btnName="仮想通貨出金する" handleClick={(e) => {
            e.preventDefault()
            setIsModal1Open(true)}} />
        </div>
      </form>
      {isModal1Open && (
        <ModalContainer
          opened={isModal1Open}
          size="lg"
          close={(prev) => setIsModal1Open(!prev)}
        >
          <div className="modal-wrapper ">
            <Input
              inputClassName="w-full mb-3"
              placeholder="USDT (Tether)"
              label="通貨"
            />
            <div className="btn-wrapper mb-3">
              <Button btnName="新しいアドレス" btnClassName="mr-10" />
              <Button btnName="コードを再送信する" />
            </div>
            <Input
              inputClassName="w-full mb-3"
              placeholder="ここにアドレスを入力してください"
            />
            <Input
              inputClassName="w-full mb-5"
              label="ネットワーク"
              placeholder="ERC-20"
            />
            <div className="flex justify-between">
              <label htmlFor="" className="text-[12px]">
                数量
              </label>
              <label htmlFor="" className="text-[12px]">
                出金可能数量 0 USDT
              </label>
            </div>
            <Input
              inputClassName="w-full mb-3"
              placeholder="ここにアドレスを入力してください"
            />
            <div className="btn-end flex items-center justify-end">
              <Button btnName="出金" btnClassName="mr-5" handleClick={() => setIsModal2Open(true)} />
              <div className="money-report text-[12px] flex flex-col items-end">
                <div className="report-1 mb-3 ">
                  <span className="">最低出金額</span>
                  <span className="ml-3">20USDT</span>
                </div>
                <div className="report-2">
                  <span className="">トランザクション手数料</span>
                  <span className="ml-3">20USDT</span>
                </div>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
      {isModal2Open && (
        <ModalContainer
          opened={isModal2Open}
          size="lg"
          close={(prev) => setIsModal2Open(!prev)}
        >
          <div className="otp-wrapper">
            <label htmlFor="" className="">
              コードを再送信する
            </label>
            <div class="flex gap-2 justify-center my-4 ">
              {[1, 2, 3, 4, 5, 6].map((ele, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    className="w-14 py-2 text-center text-lg bg-gray-200 rounded-md"
                    maxLength="1"
                  />
                );
              })}
            </div>
            <div className="label-wrapper my-2 flex justify-between">
              <label htmlFor="">Google 認証</label>
              <label htmlFor="" onClick={() => setIsModal3Open(true)}>コードを再送信する</label>
            </div>
            <div class="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5, 6].map((ele, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    className="w-14 py-2 text-center text-lg bg-gray-200 rounded-md"
                    maxLength="1"
                  />
                );
              })}
            </div>
            <div className="btn flex justify-end">
              <Button btnName="送信" btnClassName="mt-4" />
            </div>
          </div>
        </ModalContainer>
      )}
      {isModal3Open && (
        <ModalContainer
          opened={isModal3Open}
          size="sm"
          close={(prev) => setIsModal3Open(!prev)}
        >
          <div className="text flex justify-center items-center">
            メール認証用のメールが送信されました。
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default SavingsView;
