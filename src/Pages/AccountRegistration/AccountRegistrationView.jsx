import { Button, Input } from "../../Components";

const AccountRegistrationView = () => {
  return (
    <div className="account-registration-wrapper">
      <div className="top-title flex justify-center items-center">
        <h2 className="text-3xl">Account Registration</h2>
      </div>
      <hr className="mt-5" />
      <div className="flex flex-col justify-center items-center w-full">
        <form className="w-1/4">
          <Input placeholder="Exchange" />
          <Input placeholder="Account Number" />
          <Button btnClassName="mt-2" btnName="Register" />
        </form>
      </div>
    </div>
  );
};

export default AccountRegistrationView;
