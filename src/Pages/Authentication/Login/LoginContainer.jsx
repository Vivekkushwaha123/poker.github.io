import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";

const LoginContainer = () => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/')
    }
  return <LoginView {...{handleLogin}}/>;
};

export default LoginContainer;
