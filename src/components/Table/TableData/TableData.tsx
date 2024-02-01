import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {} from "react-icons/fa";
import Badge from "../../utils/Badge/Badge";
const TableData = ({
  state,
  toggleProduct,
  allTableData,
  descendingAscendingOrder,
  bgColor = "",
}: any) => {
  return (
    <table
      className={style.table}
      style={{ borderCollapse: "collapse", background: bgColor }}>
      <thead>
        <tr>
          <th>
            {" "}
            <div className={style.author}>
              <input
                type="checkbox"
                checked={
                  toggleProduct.length === state.tableData.data.length
                    ? true
                    : false
                }
                onChange={() => allTableData("all")}
              />{" "}
              <span>{state?.tableData?.tableTitle?.author}</span>
            </div>
          </th>
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.name}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
            position="left"
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.inputs}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={false}
            position="right"
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.db}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.crud}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.ws}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.inMemory}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.relation}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.status}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
          <TableHeaderArea
            title={state?.tableData?.tableTitle?.action}
            descendingAscendingOrder={descendingAscendingOrder}
            isOrder={true}
          />
        </tr>
      </thead>
      <tbody className={style.table_body_sec}>
        {state.tableData.data.map((data: any) => (
          <tr key={data.id}>
            <td>
              {" "}
              <div className="flex justify-center items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={toggleProduct.some(
                    (items: any) => items.id === data.id
                  )}
                  onChange={() => allTableData(data)}
                />{" "}
                <Image
                  src={data.img}
                  alt="arrow-down"
                  width={20}
                  height={20}
                  className={style.author_img}
                />
              </div>
            </td>
            <td className={style.name_data}>
              <p className={style.name_data_child}>
                <span>{data.name}</span>
                <span>{data.name}</span>
              </p>
            </td>
            <td>{data.inputs}</td>
            <td>
              <Badge title={data.db} bgColor="re" color="gree" />{" "}
            </td>
            <td>
              <input type="checkbox" checked={data.crud} />
            </td>
            <td>
              <input type="checkbox" checked={data.ws} />
            </td>
            <td>
              <input type="checkbox" checked={data.inMemory} />
            </td>
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
            <td>
              {data.status ? (
                <Badge title="Active" bgColor="#dcfae6" color="#079455" />
              ) : (
                ""
              )}
            </td>
            <td>
              <div className={style.actions}>
                <button>
                  <FiEye className={style.action_icon} />
                </button>
                <button>
                  <CiEdit className={style.action_icon} />
                </button>
                <button>
                  <RiDeleteBin5Line className={style.action_icon} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;

export const TableHeaderArea = ({
  title,
  descendingAscendingOrder,
  isOrder,
  position = "center",
}: any) => {
  return (
    <th>
      <div className={style[position]}>
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
    </th>
  );
};
