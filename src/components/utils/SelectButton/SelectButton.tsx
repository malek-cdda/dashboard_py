import React from "react";
import style from "./style.module.css";
const SelectButton = ({ handleRowShowValue }: any) => {
  return (
    <div>
      <div className={style.table_footer_area_1}>
        <span>Row Per Page</span>
        <select
          onChange={(e) => {
            handleRowShowValue(e.target.value);
          }}
          className={style.select}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
    </div>
  );
};

export default SelectButton;
