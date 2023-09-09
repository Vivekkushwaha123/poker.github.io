import React from "react";
import "./styles.scss";
import Button from "../Button/Button";
const DataViewTableView = () => {
  return (
    <div className="data-view-main-wrapper pb-10">
      <div className="affiliate-form mt-10 px-20  py-10 flex flex-col items-center justify-between">
        <div className="form-title flex  items-center justify-center p-6">
          アフィリエイト発生履歴
        </div>
        <div className="select-wrapper flex items-center justify-between w-full">
          <label htmlFor="発生期間">発生期間</label>
          <select
            name="発生期間"
            id="affiliate-dropdown"
            className="w-3/4 p-2 affiliate-select"
          >
            {[1, 2, 3, 4, 5, 6]?.map((ele, index) => (
              <option key={index} value="全期間">
                全期間 {index}
              </option>
            ))}
          </select>
        </div>
        <Button btnName="検索" btnClassName="affiliate-btn" />
      </div>
      <div className="data-view-table flex justify-center items-center">
        <table className="w-3/4 ">
          <tbody>
            {[1, 2, 3, 4, 5]?.map((obj, i) => (
              <tr key={i}>
                <td>2023年6月</td>
                <td>25,500円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn flex items-center justify-center">
        <Button btnName="検索" btnClassName="affiliate-btn " />
      </div>
    </div>
  );
};

export default DataViewTableView;
