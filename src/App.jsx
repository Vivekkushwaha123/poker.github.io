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
  HomePageContainer,
} from "./Pages";
import { Footer, HeaderContainer } from "./Components";
import { useLayoutEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    const isAuth = [
      "login",
      "forgot-password",
      "user-registration",
      "homepage",
    ];
    if (window.location.href.split("/").some((ele) => isAuth?.includes(ele))) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.pathname]);

  return (
    <div className="poker-webiste-main-wapper  flex flex-col">
      {isLogin && <HeaderContainer />}
      <div className="flex website-main-wrapper">
        {isLogin && (
          <div className="w-1/4 sidebar">
            <DashboardSideBarContainer />
          </div>
        )}
        <div className="w-full flex justify-center">
          <Routes>
            <Route path="/login" element={<LoginContainer />} />
            <Route
              path="/user-registration"
              element={<RegistrationContainer />}
            />
            <Route path="/" element={<MyDashboardContainer />} />
            <Route path="/homepage" element={<HomePageContainer />} />
            <Route path="/add-user" element={<MyAccountContainer />} />
            <Route path="/account-info" element={<UserInformationContainer />} />
            <Route path="/affiliate" element={<AffilateContainer />} />
            <Route path="/account-register" element={<SavingsContainer />} />
            <Route path="/withdraw" element={<MyAccountContainer />} />
            <Route
              path="/forgot-password"
              element={<ForgotPasswordContainer />}
            />
          </Routes>
        </div>
      </div>

      {isLogin && <Footer />}
    </div>
  );
}

export default App;
