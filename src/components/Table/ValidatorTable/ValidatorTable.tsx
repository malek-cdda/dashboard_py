import React, { useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import TableData from "../TableData/TableData";
import { store } from "@/redux/store";
import { updateTableData } from "@/redux/slice/tableValidateSlice/tableSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ValidatorTable = ({ bgColor = "" }: any) => {
  const state: any = useSelector((state: any) => state.tableData);
  const [toggleProduct, setToggleProduct] = useState<any>([]);
  const allTableData = (e: any) => {
    if (e === "all") {
      if (toggleProduct.length) {
        if (toggleProduct.length === state.tableData.data.length) {
          setToggleProduct([]);
        } else {
          setToggleProduct(state.tableData.data);
        }
      } else {
        setToggleProduct([...state?.tableData?.data]);
      }
    } else {
      const result: any = toggleProduct.includes(e)
        ? toggleProduct.filter((item: any) => item?.id !== e.id)
        : [...toggleProduct, e];
      setToggleProduct(result);
    }
  };
  const descendingAscendingOrder = (e: any) => {
    let result;

    if (e === "descending") {
      result = [...state.tableData.data].sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
    } else if (e === "ascending") {
      result = [...state.tableData.data].sort((a: any, b: any) =>
        b.name.localeCompare(a.name)
      );
    }
    const updateResult = { ...state.tableData.tableTitle };
    const descendingOrder = {
      data: result,
      tableTitle: updateResult,
    };
    store.dispatch(updateTableData(descendingOrder));
  };
  const [rowShowValue, setRowShowValue] = useState<number>(4);
  return (
    <div className={style.table} style={{ background: bgColor }}>
      {/* table title div  */}
      <div className={style.tableDataHeader}>
        <div className={style.tableDataHeader_title}>
          <span>Data Validator List</span>
          <span className={style.tableDataHeader_footer_title}>
            Essential Data Validation List ensures accuracy and reliability in
            information
          </span>
        </div>
        <div className={style.tableDataFooterArea}>
          <label htmlFor="search">
            <FaSearch className={style.search_icon} />
            <input type="search" id={style.search} placeholder="Search here" />
          </label>
          <button>
            <IoMdAdd className={style.add_icon} /> <span>Add new</span>
          </button>
        </div>
      </div>
      {/* table data validate div  */}

      <TableData
        state={state}
        toggleProduct={toggleProduct}
        allTableData={allTableData}
        descendingAscendingOrder={descendingAscendingOrder}
        rowShowValue={rowShowValue}
      />
      <TableFooterArea
        rowShowValue={rowShowValue}
        setRowShowValue={setRowShowValue}
      />
    </div>
  );
};

export default ValidatorTable;
export const TableFooterArea = ({ rowShowValue, setRowShowValue }: any) => {
  return (
    <div className={style.table_footer_area}>
      <div className={style.table_footer_area_1}>
        <span>Row Per Page</span>
        <select
          value={rowShowValue}
          onChange={(e) => {
            setRowShowValue(e.target.value);
            console.log("select value =", e.target.value);
          }}
          className={style.select}
          // style={{ backgroundColor: "black" }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
      <div className={style.page}>
        <span>Pages 1 to 10</span>
        <div className={style.pages_end}>
          <button>
            {" "}
            <IoIosArrowBack />{" "}
          </button>
          <button className={style.pages_active_btn}>1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
