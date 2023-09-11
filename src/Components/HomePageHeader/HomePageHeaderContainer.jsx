import { useNavigate } from "react-router-dom";
import HomePageHeaderView from "./HomePageHeaderView";
import { useState } from "react";

const HomePageHeaderContainer = () => {
  const [isHumburgerClicked, setIsHumburgerClicked] = useState(false);
  const navigate = useNavigate();

  const handleHumburgerClick = () => setIsHumburgerClicked((prev) => !prev);
  const handleNavigate = (route) => {
    setIsHumburgerClicked(false);
    navigate(route);
  };
  return <HomePageHeaderView  {...{handleHumburgerClick ,isHumburgerClicked , handleNavigate}}/>;
};

export default HomePageHeaderContainer;
