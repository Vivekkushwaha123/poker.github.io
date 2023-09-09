import { Button } from "../../Components";
import "./styles.scss";

const SavingsView = () => {
  return (
    <div className="saving-main-wrapper bg-white p-3  w-11/12">
      <h1 className="flex justify-center items-center">出金情報</h1>
      <form className="savings-form flex flex-col mt-6">
        <div className="saving-form-wrapper flex flex-col md:flex-row md:justify-evenly">
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
          <Button btnName="仮想通貨出金する" />
        </div>
      </form>
    </div>
  );
};

export default SavingsView;
