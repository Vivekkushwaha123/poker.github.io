import React, { useState } from "react";
import SavingsView from "./SavingsView";

const SavingsContainer = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  return (
    <SavingsView
      {...{
        isModal1Open,
        setIsModal1Open,
        isModal2Open,
        setIsModal2Open,
        isModal3Open,
        setIsModal3Open,
      }}
    />
  );
};

export default SavingsContainer;
