import { useState } from "react";
import TopView from "./TopView";

const TopContainer = () => {
  const [data, setData] = useState(["10", "20", "30", "40", "50"]);
  const [isDateOpen, setIsDateOpen] = useState(false);

  

  const handleDateToggle = () => {
    setIsDateOpen((prev) => !prev);
  };
  return (
    <TopView
      {...{
        data,
        setData,
        isDateOpen,
        handleDateToggle,
      }}
    />
  );
};

export default TopContainer;
