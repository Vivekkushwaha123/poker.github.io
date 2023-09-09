import React from "react";
import "./styles.scss"

const DashboardTable = ({ title , tableData , tableclass }) => {
  return (
    <div className={"common-table bg-white flex flex-col py-5 items-center justify-center " + tableclass }>
      <div className="table-heading">
        <h1>{title}</h1>
      </div>
      <div className="table-wrapper w-11/12">
        <table>
          <tbody>
            {tableData?.map((obj, i) => (
              <tr key={i} >
                <td className="p-4">{obj?.td1}</td>
                <td>{obj?.td2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
