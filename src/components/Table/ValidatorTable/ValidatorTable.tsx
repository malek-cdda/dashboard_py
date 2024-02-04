import React, { useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import TableData from "../TableData/TableData";
import { store } from "@/redux/store";
import { updateTableData } from "@/redux/slice/tableValidateSlice/tableSlice";

import Pagination from "@/components/utils/Pagination/Pagination";
import SelectButton from "@/components/utils/SelectButton/SelectButton";
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
  const updateAllToggleFunction = (e: any) => {
    let result;
    result = [...state.tableData.data].map((item: any) => {
      if (item.id === e.id) {
        return { ...item, ...e };
      }
      return item;
    });

    const updateResult = { ...state.tableData.tableTitle };
    const descendingOrder = {
      data: result,
      tableTitle: updateResult,
    };
    store.dispatch(updateTableData(descendingOrder));
  };
  const handleDelete = (e: any) => {
    console.log(e, "delete");
    const result = [...state.tableData.data].filter(
      (item: any) => item.id !== e.id
    );
    const updateResult = { ...state.tableData.tableTitle };
    const descendingOrder = {
      data: result,
      tableTitle: updateResult,
    };
    store.dispatch(updateTableData(descendingOrder));
  };
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
          <button className={style.footer_btn}>
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
        updateAllToggleFunction={updateAllToggleFunction}
        handleDelete={handleDelete}
      />
      <TableFooterArea />
    </div>
  );
};

export default ValidatorTable;
export const TableFooterArea = () => {
  const [page, setPage] = useState(1);
  const [limits, setLimits] = useState(5);
  const totalPage = 20;
  const handlePageChange = async (index: any) => {
    console.log(typeof page, index == "prev");
    if (index === "prev") {
      setPage(page <= 1 ? 1 : page - 1);
    } else if (index === "next") {
      setPage(page == totalPage ? totalPage : page + 1);
    } else if (index === "...") {
      setPage(1);
    } else {
      setPage(index);
    }
  };
  const handleRowShowValue = (e: any) => {
    setLimits(Number(e) + limits);
  };
  return (
    <div className={style.table_footer_area}>
      <SelectButton handleRowShowValue={handleRowShowValue} />
      <Pagination
        totalPage={totalPage}
        page={page}
        limits={limits}
        siblings={1}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
