import { Calendar, DatePicker } from "@mantine/dates";
import { Select, Table } from "@mantine/core";
import { TOP_TABLE_THEAD, TOP_TABlE_TBODY } from "../../Constant/constant";

const TopView = ({ date, handleDateToggle, isDateOpen, setData, data }) => {
  return (
    
      <div className="top-wrapper flex flex-col ">
        <div className="top-title flex justify-center items-center">
          <h2 className="text-3xl">Withdrawal History</h2>
        </div>
        <hr className="mt-5" />
        <div className="date-wrapper flex justify-around my-10">
          <div className="show-wrapper flex flex-row">
            <label htmlFor="" className="my-2 mx-4">
              Show
            </label>
            <Select
              data={data}
              placeholder="Select items"
              nothingFound="Nothing found"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setData((current) => [...current, item]);
                return item;
              }}
            />
          </div>
          <div className="date-picker-wrapper flex flex-col w-1/4">
            <button type="button" className="" onClick={handleDateToggle}>
              Select Period
            </button>
            {isDateOpen &&  <Calendar/>}
          </div>
        </div>
        <div className="table-wrapper">
          <Table striped highlightOnHover withBorder>
            <thead>
              <tr>
                {TOP_TABLE_THEAD?.map((ele, i) => (
                  <th key={i}>{ele}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TOP_TABlE_TBODY?.map((ele, i) => (
                <tr key={i}>
                  <td>{ele?.dateTime}</td>
                  <td>{ele?.registerdAmountL}</td>
                  <td>{ele?.approvedAmount}</td>
                  <td>{ele?.currency}</td>
                  <td>{ele?.Situation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
  );
};

export default TopView;
