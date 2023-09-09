import React from "react";
import "./button.scss"

const Button = ({type , btnId ,btnName,handleClick , btnClassName}) => {
  return (
    <button type={type} id={btnId} className={ btnClassName + " main-btn"} onClick={handleClick}>
      {btnName}
    </button>
  );
};

export default Button;
