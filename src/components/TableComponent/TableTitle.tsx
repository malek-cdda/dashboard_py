import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import style from "./style.module.css";
const TableTitle = () => {
  return (
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
  );
};

export default TableTitle;
