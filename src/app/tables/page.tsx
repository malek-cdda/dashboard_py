"use client";

import TableComponent from "@/components/TableComponent/Index";
import { ActionComponent } from "@/components/utils/ActionComponant/ActionComponant";
import Badge from "@/components/utils/Badge/Badge";
import WidgetCard from "@/components/utils/Widget/Card";
import { IoAnalytics } from "react-icons/io5";
import { updateTableSlice } from "@/redux/slice/tableDataSlice";
import { store } from "@/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { handlePageChanges } from "@/hooks/table";
const Page = () => {
  const data = useSelector((state: any) => state?.data?.data);

  // selected data you can got here
  const [selectedRecords, setSelectedRecords] = useState<any>([]);

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
  // toggle product state code here
  const [toggleProduct, setToggleProduct] = useState([]);
  //  sorted data function code here
  const getSortingData = (dataSort: any) => {
    store.dispatch(updateTableSlice(dataSort));
  };
  // delete data function
  const handleDelete = (e: any) => {
    const result = [...data].filter((item: any) => item.id !== e.id);
    store.dispatch(updateTableSlice(result));
  };
  const [page, setPage] = useState(1);
  const [limits, setLimits] = useState(5);
  const [newData, setNewData] = useState([]);
  // for creating front end pagination and show the data
  useEffect(() => {
    let newDataArray: any = [];
    for (let i = (page - 1) * limits; i < page * limits; i++) {
      if (data[i]) {
        newDataArray.push(data[i]);
      }
    }
    setNewData(newDataArray);
  }, [data, limits, page]);
  const totalPage = Math.ceil(data?.length / limits);
  // pagination function code here
  const handlePageChange = async (pageNumber: any) => {
    handlePageChanges(page, totalPage, pageNumber, setPage);
  };
  // For show the table limit data set function code here
  const handleRowShowValue = (e: any) => {
    setLimits(e);
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
          style={{ width: "32px", height: "32px", borderRadius: "50%" }}
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
      title: "InMemory",

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
          <div className="flex flex-nowrap">
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

  return (
    <div className="container mx-auto my-2 flex flex-col gap-5">
      <div className={style.data_validate_table}>
        <p className={style.general}>General Overview</p>
        <div className={style.data_validate_table_card}>
          <WidgetCard
            icon={<IoAnalytics />}
            title="Total Data Validation"
            user="12"
            subTitle="Subtitle"
            iconColor="white"
            iconBgColor="#6938ef"
          />
          <WidgetCard
            icon={<IoAnalytics />}
            title="Ready to Use"
            user="12"
            subTitle="Subtitle"
            iconColor="black"
            iconBgColor="#0e9384"
          />
          <WidgetCard
            title="Data Validate With Issues"
            user="12"
            subTitle="Subtitle"
            icon={<IoAnalytics />}
            iconColor="white"
            iconBgColor="green"
            bgColor="re"
          />
        </div>
      </div>
      <TableComponent
        columns={columns}
        data={data}
        setSelectedRecords={setSelectedRecords}
        getSortingData={getSortingData}
        isPagination={true}
        showSelectBox={true}
        headerShow={true}
        newData={newData}
        handleRowShowValue={handleRowShowValue}
        totalPage={totalPage}
        page={page}
        limits={limits}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
