"use client";
import React, { useState } from "react";
import Badge from "../utils/Badge/Badge";
import { AuthorComponent } from "../Table/TableComponent/TableComponents";
import CheckBoxButton from "../utils/CheckboxButton/CheckBoxButton";
import style from "./style.module.css";
const Table = ({ columns, records }: any) => {
  return (
    <div>
      <table id={style.customers}>
        {/* table header and body */}
        <TableHeader columns={columns} />
        <TableBody columns={columns} records={records} />
      </table>
    </div>
  );
};

export default Table;
const TableHeader = ({ columns }: any) => {
  return (
    <thead>
      <tr>
        {/* columns header html code  */}
        {columns.map((header: any, index: any) => {
          return (
            <th key={index}>
              {header?.accessor === "id" ? <CheckBoxButton /> : header?.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
const TableBody = ({ columns, records }: any) => {
  return (
    <tbody>
      {/* table body html code */}
      {records.map((data: any, index: any) => {
        return (
          <tr key={index}>
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
