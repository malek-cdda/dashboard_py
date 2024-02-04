"use client";
import React, { useState } from "react";
import Badge from "../utils/Badge/Badge";
import { AuthorComponent } from "../Table/TableComponent/TableComponents";
import CheckBoxButton from "../utils/CheckboxButton/CheckBoxButton";
// import { tableData, tableHeader } from "./tableData";

const Table = () => {
  const [toggleProduct, setToggleProduct] = useState<any>([]);
  const allTableData = (e: any) => {
    if (e === "all") {
      if (toggleProduct.length) {
        // if (toggleProduct.length === state.tableData.data.length) {
        //   setToggleProduct([]);
        // } else {
        //   setToggleProduct(state.tableData.data);
        // }
      } else {
        // setToggleProduct([...state?.tableData?.data]);
      }
    } else {
      const result: any = toggleProduct.includes(e)
        ? toggleProduct.filter((item: any) => item?.id !== e.id)
        : [...toggleProduct, e];
      setToggleProduct(result);
    }
  };
  const data = [
    {
      id: 1,
      name: "Abu hamid",
      img: "/assets/person.jpg",
      title: "Title is text those set in the head of the content",
      roll: 123,
    },
    {
      id: 2,
      name: "Abu hamid1",
      title: "Title is text those set in the head of the content",
      roll: 123,
    },
    {
      id: 3,
      name: "Abu hamid2",
      title: "Title is text those set in the head of the content",
      roll: 123,
    },
  ];
  const columns = [
    {
      accessor: "id",
      title: "ID",
      backgroundColor: "red",
      render: (row: any) => <CheckBoxButton />,
    },
    {
      accessor: "name",
      title: "Name",
      backgroundColor: "red",
      render: (row: any) => <span>{row.name}</span>,
    },
    {
      accessor: "title",
      title: "Title",
      render: (row: any) => <div>{row.title}</div>,
    },
    {
      accessor: "roll",
      title: "Roll",
      render: (row: any) => {
        return (
          <div>
            <button
              onClick={() => {
                console.log(row);
              }}>
              SUBMIT
            </button>{" "}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            {columns.map((header: any, index: any) => {
              return (
                <th key={index}>
                  {header?.accessor === "id" ? (
                    <CheckBoxButton />
                  ) : (
                    header?.title
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((data: any, index: any) => {
            return (
              <tr key={index}>
                {columns.map((header: any, index: any) => (
                  <td key={index}>
                    {header?.render
                      ? header?.render(data)
                      : data[header.accessor]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
