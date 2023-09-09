import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import {
  LoginContainer,
  RegistrationContainer,
  AffilateContainer,
  MyAccountContainer,
  ForgotPasswordContainer,
  MyDashboardContainer,
  SavingsContainer,
  UserInformationContainer,
  DashboardSideBarContainer,
} from "./Pages";
import { HeaderContainer } from "./Components";
import { useLayoutEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    const isAuth = ["login", "forgot-password", "user-registration"];
    if (window.location.href.split("/").some((ele) => isAuth?.includes(ele))) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.pathname]);

  return (
    <>
      {isLogin && (
        <HeaderContainer />
      )}
      <div className="flex website-main-wrapper">
        {isLogin && (
          <div className="w-1/4 sidebar">
            <DashboardSideBarContainer />
          </div>
        )}
        <div className="w-full flex justify-center h-full">
          <Routes>
            <Route path="/login" element={<LoginContainer />} />
            <Route
              path="/user-registration"
              element={<RegistrationContainer />}
            />
            <Route path="/affiliate" element={<AffilateContainer />} />
            <Route path="/user" element={<UserInformationContainer />} />
            <Route path="/saving" element={<SavingsContainer />} />
            <Route path="/myaccount" element={<MyAccountContainer />} />
            <Route path="/" element={<MyDashboardContainer />} />
            <Route path="/withdraw" element={<MyAccountContainer />} />
            <Route
              path="/forgot-password"
              element={<ForgotPasswordContainer />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;