import React, { useEffect, useState } from "react";
import Table from "./Table";
import SelectButton from "../utils/SelectButton/SelectButton";
import Pagination from "../utils/Pagination/Pagination";

import { handlePageChanges } from "@/hooks/table";
import style from "./style.module.css";
const TableComponent = ({
  columns,
  data,
  setSelectedRecords,
  getSortingData,
  isPagination,
  headerShow = true,
  showSelectBox = true,
  newData,
  handleRowShowValue,
  totalPage,
  page,
  limits,
  handlePageChange,
}: any) => {
  return (
    <div>
      <Table
        columns={columns}
        records={newData}
        onSelectedRecords={setSelectedRecords}
        headerShow={headerShow}
        showSelectBox={showSelectBox}
        getSortingData={getSortingData}
        tableAllData={data}
        paginationValue={
          <div className={style.pagination}>
            <SelectButton handleRowShowValue={handleRowShowValue} />
            <Pagination
              totalPage={totalPage}
              page={page}
              limits={limits}
              siblings={1}
              handlePageChange={handlePageChange}
            />
          </div>
        }
        isPagination={isPagination}
      />
    </div>
  );
};

export default TableComponent;
