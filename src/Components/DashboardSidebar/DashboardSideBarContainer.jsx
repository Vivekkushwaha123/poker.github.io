import React, { useLayoutEffect, useState } from "react";
import DashboardSideBarView from "./DashboardSideBarView";
import { useNavigate } from "react-router-dom";

const DashboardSideBarContainer = ({ component, value }) => {
  const [isSelectedTab, setIsSelectedTab] = useState(
    `/${window.location.href.split("/")[window.location.href.split("/")?.length - 1]}`
  );
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
    setIsSelectedTab(route);
  };
  return (
    <DashboardSideBarView
      {...{ handleNavigate, isSelectedTab, component, value }}
    />
  );
};

export default DashboardSideBarContainer;
