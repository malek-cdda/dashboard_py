"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { handleAllDataSelectedRecord } from "@/hooks/table";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import TableTitle from "./TableTitle";

const Table = ({
  columns,
  records,
  onSelectedRecords,
  showSelectBox = true,
  headerShow = true,
  getSortingData,
  tableAllData,
  paginationValue,
  isPagination = true,
}: any) => {
  // ?! all selected table area here
  const [toggleProduct, setToggleProduct] = useState<any>([]);
  // select box function code here for all data
  const handleAllDataSelectedRecords = (e: any) => {
    handleAllDataSelectedRecord(e, toggleProduct, setToggleProduct, records);
  };
  useEffect(() => {
    onSelectedRecords(toggleProduct);
  }, [toggleProduct, onSelectedRecords]);
  return (
    <div className={style.table_area}>
      <TableTitle />
      <div className={style.table}>
        <table id={style.customers}>
          {/* table header and body */}
          {headerShow && (
            <TableHeader
              columns={columns}
              records={records}
              handleAllDataSelectedRecords={handleAllDataSelectedRecords}
              toggleProduct={toggleProduct}
              showSelectBox={showSelectBox}
              getSortingData={getSortingData}
              tableAllData={tableAllData}
            />
          )}
          <TableBody
            columns={columns}
            records={records}
            handleAllDataSelectedRecords={handleAllDataSelectedRecords}
            toggleProduct={toggleProduct}
            showSelectBox={
              showSelectBox ? true : headerShow ? showSelectBox : false
            }
          />
        </table>
      </div>
      {isPagination && paginationValue}
    </div>
  );
};

export default Table;
