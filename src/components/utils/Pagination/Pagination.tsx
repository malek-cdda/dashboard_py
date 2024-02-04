import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from "./style.module.css";
import { returnPagination } from "./returnPagination";
const Pagination = ({
  totalPage,
  page,
  limits,
  siblings,
  handlePageChange,
}: any) => {
  const arr = returnPagination(totalPage, page, limits, siblings);
  return (
    <div className={style.page}>
      <span>Pages 1 to 10</span>
      <div className={style.pages_end}>
        <button
          className={page == 1 ? style.disable : ""}
          onClick={() => handlePageChange("prev")}>
          {" "}
          <IoIosArrowBack />{" "}
        </button>
        {arr.map((item, index) => (
          <button
            key={index}
            className={item == page ? style.pages_active_btn : ""}
            onClick={() => handlePageChange(item)}>
            {item}
          </button>
        ))}
        <button
          className={page == totalPage ? style.disable : ""}
          onClick={() => handlePageChange("next")}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
