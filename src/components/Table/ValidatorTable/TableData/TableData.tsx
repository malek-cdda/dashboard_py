import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
const TableData = ({
  state,
  toggleProduct,
  allProduct,
  descendingOrder,
}: any) => {
  return (
    <table className={style.table} style={{ borderCollapse: "collapse" }}>
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
                onChange={() => allProduct("all")}
              />{" "}
              <span>{state?.tableData?.tableTitle?.author}</span>
            </div>
          </th>
          <th>
            <span>{state?.tableData?.tableTitle?.name} </span>
            <button onClick={descendingOrder}> </button>
          </th>
          <th>{state?.tableData?.tableTitle?.inputs}</th>
          <th>{state?.tableData?.tableTitle?.db}</th>
          <th>{state?.tableData?.tableTitle?.crud}</th>
          <th>{state?.tableData?.tableTitle?.ws}</th>
          <th>{state?.tableData?.tableTitle?.inMemory}</th>
          <th>{state?.tableData?.tableTitle?.relation}</th>
          <th>{state?.tableData?.tableTitle?.status}</th>
          <th>{state?.tableData?.tableTitle?.action}</th>
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
                  onChange={() => allProduct(data)}
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
            <td>
              <span>
                <span>{data.name}</span>
              </span>
            </td>
            <td>{data.inputs}</td>
            <td>
              <span className={style.db}>{data.db} </span>
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
                  <span key={index}>{item}</span>
                ))}
              </span>
            </td>
            <td>
              {data.status ? <span className={style.status}> Active</span> : ""}
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
