import React from "react";
import { Modal } from "@mantine/core";

function ModalView({  opened , close , children }) {
  return (
    <Modal opened={opened} onClose={close} size="xl" centered>
      {children}
    </Modal>
  );
}

export default ModalView;
