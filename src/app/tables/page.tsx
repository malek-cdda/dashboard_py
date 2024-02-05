"use client";
import Table from "@/components/TableComponent/Table";
import { ActionComponent } from "@/components/utils/ActionComponant/ActionComponant";
import Badge from "@/components/utils/Badge/Badge";
import CheckBoxButton from "@/components/utils/CheckboxButton/CheckBoxButton";
import Pagination from "@/components/utils/Pagination/Pagination";
import SelectButton from "@/components/utils/SelectButton/SelectButton";
import { handlePageChanges } from "@/hooks/table";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
const Page = () => {
  const data = useSelector((state: any) => state?.data?.data);
  const [page, setPage] = useState(1);
  const [limits, setLimits] = useState(5);
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState([]);
  const columns = [
    {
      accessor: "id",
      title: "ID",
      backgroundColor: "red",
      render: (row: any) => <CheckBoxButton />,
    },

    {
      accessor: "author",
      title: "Author",
      render: (row: any) => (
        <Image
          width={1000}
          height={1000}
          src={row.img}
          alt="person"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      ),
    },
    {
      accessor: "name",
      title: "Name",
      render: (row: any) => <span>{row.name}</span>,
    },
    {
      accessor: "inputs",
      title: "Inputs",
      render: (row: any) => <span>{row.inputs}</span>,
    },
    {
      accessor: "db",
      title: "DB",
      render: (row: any) => (
        <Badge bgColor="gree" color="whit" title={row.db} />
      ),
    },
    {
      accessor: "crud",
      title: "CRUD",
      render: (row: any) => <CheckBoxButton />,
    },
    {
      accessor: "ws",
      title: "WS",
      render: (row: any) => <CheckBoxButton />,
    },
    {
      accessor: "inMemory",
      title: "In Memory",
      render: (row: any) => <CheckBoxButton />,
    },
    {
      accessor: "relation",
      title: "Relation",
      render: (row: any) => {
        return (
          <div>
            {row.relation.map((item: any, index: any) => (
              <Badge
                key={index}
                bgColor="gree"
                color="whit"
                title={item}
                gap="8px"
              />
            ))}
          </div>
        );
      },
    },
    {
      accessor: "status",
      title: "Status",
      render: (row: any) => (
        <Badge bgColor="gree" color="whit" title={row.status ? "Active" : ""} />
      ),
    },
    {
      accessor: "action",
      title: "Action",
      render: (row: any) => <ActionComponent data={row} />,
    },
  ];
  // For creating pagination i have used useEffect and useState hooks
  useEffect(() => {
    let newDataArray: any = [];
    for (let i = (page - 1) * limits; i < page * limits; i++) {
      if (data[i]) {
        newDataArray.push(data[i]);
      }
    }
    setNewData(newDataArray);
  }, [data, limits, page]);
  // Find out total page here
  const totalPage = Math.ceil(data?.length / limits);
  // pagination function code here
  const handlePageChange = async (pageNumber: any) => {
    handlePageChanges(page, totalPage, pageNumber, setPage);
  };
  // For show the table limit data set function code here
  const handleRowShowValue = (e: any) => {
    setLimits(e);
  };
  return (
    <div>
      <Table columns={columns} records={newData} />
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
    </div>
  );
};

export default Page;
