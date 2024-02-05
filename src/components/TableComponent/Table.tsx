"use client";
import React, { useEffect, useState } from "react";
import Badge from "../utils/Badge/Badge";
import { AuthorComponent } from "../Table/TableComponent/TableComponents";
import CheckBoxButton from "../utils/CheckboxButton/CheckBoxButton";
import style from "./style.module.css";
import { handleAllDataSelectedRecord } from "@/hooks/table";
const Table = ({
  columns,
  records,
  onSelectedRecords,
  showSelectBox = true,
  headerShow = true,
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
  );
};

export default Table;
const TableHeader = ({
  columns,
  records,
  handleAllDataSelectedRecords,
  toggleProduct,
  showSelectBox,
}: any) => {
  const initialSortConfig = columns.reduce((acc: any, column: any) => {
    if (column?.sortable) {
      acc[column?.accessor] = { key: column?.accessor, direction: "asc" };
    }
    return acc;
  }, {});
  const [sortConfig, setSortConfig] = useState(initialSortConfig);
  const handleSort = (key: string) => {
    const direction = sortConfig[key].direction === "asc" ? "desc" : "asc";
    const newSortConfig = { ...sortConfig, [key]: { key, direction } };
    setSortConfig(newSortConfig);
  };
  return (
    <thead>
      <tr>
        {/* columns header html code  */}
        {showSelectBox && (
          <th>
            <input
              type="checkbox"
              checked={toggleProduct.length === records.length}
              onChange={() => {
                handleAllDataSelectedRecords("all");
              }}
            />
          </th>
        )}
        {columns.map((column: any, index: any) => {
          return (
            <th
              key={index}
              onClick={() => column.sortable && handleSort(column?.accessor)}>
              {column?.title}
              {column.sortable && (
                <span>
                  {sortConfig[column.accessor].key === column.accessor && (
                    <span>
                      {sortConfig[column.accessor].direction === "asc" ? (
                        <span
                          onClick={() => handleSort(column.accessor)}
                          className={` sorted duration-1000 transition-all ease-linear ${
                            sortConfig[column.accessor].key === column.accessor
                              ? "sorted"
                              : ""
                          }`}>
                          ▲
                        </span>
                      ) : (
                        <span
                          onClick={() => handleSort(column.accessor)}
                          className="duration-1000 transition-all ease-linear sorted">
                          ▼
                        </span>
                      )}
                    </span>
                  )}
                </span>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
const TableBody = ({
  columns,
  records,

  toggleProduct,
  handleAllDataSelectedRecords,
  showSelectBox,
}: any) => {
  return (
    <tbody>
      {/* table body html code */}
      {records.map((data: any, index: any) => {
        return (
          <tr key={index}>
            {showSelectBox && (
              <td>
                <input
                  type="checkbox"
                  checked={toggleProduct.some(
                    (item: any) => item.id === data.id
                  )}
                  onChange={() => handleAllDataSelectedRecords(data)}
                />
              </td>
            )}
            {columns.map((header: any, index: any) => (
              <td key={index}>
                {header?.render ? header?.render(data) : data[header.accessor]}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};
