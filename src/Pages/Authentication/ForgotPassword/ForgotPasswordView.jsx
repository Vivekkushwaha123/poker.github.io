import { NavLink } from "react-router-dom";
import { Button } from "../../../Components";

const ForgotPasswordView = () => {
  return (
    <div class="flex justify-center items-center h-screen  bg-gray-100">
      <div class="w-1/3 p-6  bg-white rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4 flex items-center js">メール認証</h2>
        <p class="text-sm text-gray-500 my-3">
        メール ID に送信された確認コードを入力してください
        </p>
        <div class="flex gap-2">
          {[1, 2, 3,  4, 5, 6].map((ele, index) => {
            return (
              <input
                key={index}
                type="text"
                className="w-1/6 py-2 text-center text-lg bg-gray-200 rounded-md"
                maxlength="1"
              />
            );
          })}
        </div> 
        <p className="forgot-password text-right mt-3">コードを再送信する</p> 
      </div>
    </div>
  );
};

export default ForgotPasswordView;
