import React from "react";
import { Modal } from "@mantine/core";

function ModalView({  opened , close , children ,size }) {
  return (
    <Modal opened={opened}  onClose={close} size={size || "xl"} centered>
      {children}
    </Modal>
  );
}

export default ModalView;
