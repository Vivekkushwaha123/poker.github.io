import React from "react";
import DashboardSideBarView from "./DashboardSideBarView";
import { useNavigate } from "react-router-dom";

const DashboardSideBarContainer = ({component , value}) => {
  const navigate = useNavigate()
  const handleNavigate = (route) => navigate(route)
  return <DashboardSideBarView {...{ handleNavigate , component , value}} />;
};

export default DashboardSideBarContainer;
