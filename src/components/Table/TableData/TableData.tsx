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
  rowShowValue,
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

  return (
    <table
      className={style.table}
      style={{
        background: bgColor,

        overflowX: "scroll",
        width: "100%", // Set a fixed width or adjust as needed
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
                    isOrder={state?.tableData?.tableTitle[item]?.show}
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
        {state.tableData.data.slice(0, rowShowValue).map((data: any) => (
          <TableBodyArea
            data={data}
            keys={keys}
            key={data.id}
            toggleProduct={toggleProduct}
            allTableData={allTableData}
            keyHeaderValue={keyHeaderValue}
            render={(data: any) => (
              <div className="z-50 top-1/2 left-1/2 bg-red-900">
                <p>{data} show in ui</p>
              </div>
            )}
          />
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
  position = "left",
  allTableData,
  state,
  toggleProduct,
}: any) => {
  return (
    <th>
      {isOrder && (
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

              <span className={style.order_icon}>
                <button onClick={() => descendingAscendingOrder("ascending")}>
                  <FaArrowDown />
                </button>
                <button onClick={() => descendingAscendingOrder("descending")}>
                  <FaArrowUp />
                </button>
              </span>
            </div>
          )}
        </>
      )}
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
}: any) => {
  return (
    <tr>
      {/* {Object.keys(data).map(
        (item: any, index: any) =>
          !keys.includes(item) && <td key={index}>{data[item]}</td>
      )} */}
      {keyHeaderValue.map((item: any, index: any) => {
        return (
          <td key={index} onClick={() => render(data[item])}>
            {data[item]}
          </td>
        );
      })}
      {/* {state?.tableData?.tableTitle["status"]?.show && (
        <Badge title="Active" bgColor="#dcfae6" color="#079455" />
      )} */}
      {/* {!keys.includes("author") && (
        <td>
          <td>
            {" "}
            <div>
              <input
                type="checkbox"
                checked={toggleProduct.some(
                  (items: any) => items?.id === data?.id
                )}
                onChange={() => allTableData(data)}
              />{" "}
              <Image
                src={data.img}
                alt="arrow-down"
                width={20}
                height={20}
                className={style?.author_img}
              />
            </div>
          </td>
        </td>
      )}
      {!keys.includes("name") && (
        <td className={style.name_data}>
          <p className={style.name_data_child}>
            <span>{data?.name}</span>
            <span>{data?.name}</span>
          </p>
        </td>
      )}
      {!keys.includes("inputs") && <td>{data.inputs}</td>}
      {!keys.includes("db") && (
        <td>
          <Badge title={data?.db} bgColor="re" color="gree" />{" "}
        </td>
      )}
      {!keys.includes("crud") && (
        <td>
          <input type="checkbox" checked={data.crud} onChange={e=>handleCrudChange(data)} />
        </td>
      )}
      {!keys.includes("ws") && (
        <td>
          <input type="checkbox" checked={data.ws} />
        </td>
      )}
      {!keys.includes("inMemory") && (
        <td>
          <input type="checkbox" checked={data.inMemory} />
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
      )}
      {!keys.includes("status") && (
        <td>
          <Badge title="active" bgColor="#dcfae6" color="#079455" />
        </td>
      )}
      {!keys.includes("action") && (
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
      )} */}
    </tr>
  );
};
