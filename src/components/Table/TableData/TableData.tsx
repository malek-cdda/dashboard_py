import React from "react";
import style from "./style.module.css";
import Image from "next/image";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {} from "react-icons/fa";
import Badge from "../../utils/Badge/Badge";
import {
  ActionComponent,
  AuthorComponent,
  CheckboxComponent,
} from "../TableComponent/TableComponents";
const TableData = ({
  state,
  tableData,
  toggleProduct,
  allTableData,
  descendingAscendingOrder,
  bgColor = "r",
  rowShowValue,
  updateAllToggleFunction,
  handleDelete,
}: any) => {
  let keys: string[] = [];
  let keyHeaderValue: string[] = [];
  Object.keys(state.tableData.tableTitle).map((item, index) => {
    if (!state?.tableData?.tableTitle[item]?.show) {
      keys.push(item);
    } else {
      keyHeaderValue.push(item);
    }
  });
  console.log(tableData, "table data page ");
  return (
    <div className={style.scrollableTableContainer}>
      <table
        className={style.table}
        style={{
          background: bgColor,
          width: "100%",
          overflowX: "scroll",
        }}>
        <thead>
          <tr>
            {Object.keys(state?.tableData?.tableTitle).map(
              (item: any, index: any) => (
                <>
                  {state?.tableData?.tableTitle[item]?.show ? (
                    <TableHeaderArea
                      title={state?.tableData?.tableTitle[item]?.label}
                      descendingAscendingOrder={descendingAscendingOrder}
                      isShow={state?.tableData?.tableTitle[item]?.show}
                      isOrder={state?.tableData?.tableTitle[item]?.isOrder}
                      key={index}
                      allTableData={allTableData}
                      state={state}
                      toggleProduct={toggleProduct}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )
            )}
          </tr>
        </thead>
        <tbody className={style.table_body_sec}>
          {state?.tableData?.data.map((data: any) => (
            <TableBodyArea
              data={data}
              keys={keys}
              key={data?.id}
              toggleProduct={toggleProduct}
              allTableData={allTableData}
              keyHeaderValue={keyHeaderValue}
              updateAllToggleFunction={updateAllToggleFunction}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;

export const TableHeaderArea = ({
  title,
  descendingAscendingOrder,
  isShow,
  isOrder,
  position = "left",
  allTableData,
  state,
  toggleProduct,
}: any) => {
  return (
    <th>
      <>
        {title == "Author" ? (
          <div className={style[position]}>
            <input
              type="checkbox"
              checked={
                toggleProduct.length === state.tableData.data.length
                  ? true
                  : false
              }
              onChange={() => allTableData("all")}
            />{" "}
            <span>{title}</span>
          </div>
        ) : (
          <div className={style["left"]}>
            <span>{title} </span>

            {isOrder && (
              <span className={style.order_icon}>
                <button onClick={() => descendingAscendingOrder("ascending")}>
                  <FaArrowDown />
                </button>
                <button onClick={() => descendingAscendingOrder("descending")}>
                  <FaArrowUp />
                </button>
              </span>
            )}
          </div>
        )}
      </>
    </th>
  );
};

export const TableBodyArea = ({
  data,
  keys,
  toggleProduct,
  allTableData,
  keyHeaderValue,
  render,
  updateAllToggleFunction,
  handleDelete,
}: any) => {
  const returnRender = (): any => {
    return keyHeaderValue.map((item: any, index: any) => {
      switch (data[item]?.type || data[item]) {
        case "check_img":
          return (
            <td key={index}>
              <AuthorComponent
                title={data[item]}
                toggleProduct={toggleProduct}
                allTableData={allTableData}
                data={data}
              />
            </td>
          );
        case true:
        case false:
          return (
            <td key={index}>
              <CheckboxComponent
                data={data}
                item={item}
                updateAllToggleFunction={updateAllToggleFunction}
              />
            </td>
          );
        case "action":
          return (
            <td key={index}>
              <ActionComponent handleDelete={handleDelete} data={data} />
            </td>
          );
        case "badge":
          return (
            <td key={index}>
              <Badge
                title={data[item]?.name}
                bgColor="#dcfae6"
                color="#079455"
              />
            </td>
          );
        default:
          return (
            <td key={index}>
              <React.Fragment></React.Fragment>
            </td>
          );
      }
    });
  };
  return (
    <React.Fragment>
      {" "}
      <tr>{returnRender()} </tr>{" "}
    </React.Fragment>
  );
};

{
  /* 
{!keys.includes("name") && (
  <td className={style.name_data}>
    <p className={style.name_data_child}>
      <span>{data?.name}</span>
      <span>{data?.name}</span>
    </p>
  </td>
)}


{!keys.includes("relation") && (
  <td>
    <span className={style.relation}>
      {data.relation.map((item: any, index: any) => (
        <Badge
          title={item}
          bgColor="#dcfae6"
          color="#079455"
          key={index}
        />
      ))}
    </span>
  </td>
 
  /* </tr> */
}
