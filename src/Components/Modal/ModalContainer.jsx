import React from "react";
import ModalView from "./ModalView";

const ModalContainer = ({ children, opened, open, close , size }) => {
  return (
    <ModalView
      {...{
        opened,
        close,
        children,
        size
      }}
    />
  );
};

export default ModalContainer;
