import React, { useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import TableData from "./TableData/TableData";
const ValidatorTable = () => {
  const state: any = useSelector((state: any) => state.tableData);

  const [toggleProduct, setToggleProduct] = useState<any>([]);
  const allProduct = (e: any) => {
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
  const descendingOrder = (e: any) => {
    // const result = state.tableData.data.sort((a: any, b: any) =>
    //   a.name.localeCompare(b.name)
    // );
    // console.log(state.tableData.data, result);
  };
  return (
    <div className={style.table}>
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
        allProduct={allProduct}
        descendingOrder={descendingOrder}
      />
      <div className={style.table_footer_area}>
        <div className={style.table_footer_area_1}>
          <span>Row Per Page</span>
          <select>
            <option value="1" defaultValue={1} selected>
              6
            </option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
          </select>
        </div>
        <div>
          <span>
            {" "}
            Page 1 to 10 {"<"} 1 2 3 ... 8 9 10 {">"}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ValidatorTable;
