import React from "react";
import { DashboardTable, DataViewTableContainer } from "../../Components";
import { DASBOARD_TABLE_1, DASBOARD_TABLE_2 } from "../../Constant/constant";
import "./styles.scss"

const MyDashboardView = () => {
  return (
    <div className="my-dashboard-view w-11/12" >
      <DashboardTable tableData={DASBOARD_TABLE_1} title="キャッシュバック" tableclass ="table_1 mb-4" />
      <DashboardTable tableData={DASBOARD_TABLE_2}   title="アフィリエイト"  tableclass ="-mt-4" />
      <DataViewTableContainer/>
    </div>
  );
};

export default MyDashboardView;
