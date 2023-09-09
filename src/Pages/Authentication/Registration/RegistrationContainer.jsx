import React from "react";
import RegistrationView from "./RegistrationView";
import { useNavigate } from "react-router-dom";

const RegistrationContainer = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };
  return <RegistrationView {...{ handleRegister }} />;
};

export default RegistrationContainer;
