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
import { store } from "@/redux/store";
import { updateTableSlice } from "@/redux/slice/tableDataSlice";
const Page = () => {
  const data = useSelector((state: any) => state?.data?.data);
  const [page, setPage] = useState(1);
  const [limits, setLimits] = useState(5);
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState([]);
  // selected data you can got here
  const [selectedRecords, setSelectedRecords] = useState<any>([]);
  const handleDelete = (e: any) => {
    const result = [...data].filter((item: any) => item.id !== e.id);
    store.dispatch(updateTableSlice(result));
  };
  const singleMultiToggle = (e: any) => {
    console.log(e);
    let result;
    result = [...data].map((item: any) => {
      if (item.id === e.id) {
        return { ...item, ...e };
      }
      return item;
    });
    store.dispatch(updateTableSlice(result));
  };
  const columns = [
    {
      accessor: "id",
      title: "ID",
      backgroundColor: "red",
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
      sortable: true, // This is the new line of code
      render: (row: any) => <span>{row.name}</span>,
    },
    {
      accessor: "inputs",
      title: "Inputs",
      sortable: true,
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

      render: (row: any) => (
        <input
          type="checkbox"
          checked={row?.crud}
          onChange={(e) => {
            singleMultiToggle({ id: row?.id, crud: !row?.crud });
          }}
        />
      ),
    },
    {
      accessor: "ws",
      title: "WS",
      render: (row: any) => (
        <input
          type="checkbox"
          checked={row?.ws}
          onChange={(e) => {
            singleMultiToggle({ id: row?.id, ws: !row?.ws });
          }}
        />
      ),
    },
    {
      accessor: "inMemory",
      title: "In Memory",

      render: (row: any) => (
        <input
          type="checkbox"
          checked={row?.inMemory}
          onChange={(e) => {
            singleMultiToggle({ id: row?.id, inMemory: !row?.inMemory });
          }}
        />
      ),
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
      render: (row: any) => (
        <ActionComponent data={row} handleDelete={handleDelete} />
      ),
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
  // toggle product state code here
  const [toggleProduct, setToggleProduct] = useState([]);
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
      <Table
        columns={columns}
        records={newData}
        onSelectedRecords={setSelectedRecords}
        headerShow={true}
        showSelectBox={true}
      />
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
