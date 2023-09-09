import React from "react";
import ModalView from "./ModalView";

const ModalContainer = ({ children, opened, open, close }) => {
  return (
    <ModalView
      {...{
        opened,
        close,
        children,
      }}
    />
  );
};

export default ModalContainer;
