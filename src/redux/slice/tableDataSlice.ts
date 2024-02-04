import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    tableTitle: [
      {
        accessor: "author",
        label: "Author",
        show: true,
        isOrder: false,
      },
      {
        accessor: "name",
        label: "Name",
        show: true,
        isOrder: true,
      },
      {
        accessor: "inputs",
        label: "Inputs",
        show: true,
        isOrder: false,
      },
      {
        accessor: "db",
        label: "DB",
        show: true,
        isOrder: false,
      },
      {
        accessor: "crud",
        label: "Crud",
        show: true,
        isOrder: false,
      },
      {
        accessor: "ws",
        label: "Ws",
        show: true,
        isOrder: false,
      },
      {
        accessor: "inMemory",
        label: "In Memory",
        show: true,
        isOrder: false,
      },
      {
        accessor: "relation",
        label: "Relation",
        show: true,
        isOrder: false,
      },
      {
        accessor: "status",
        label: "Status",
        show: true,
        isOrder: false,
      },
      {
        accessor: "action",
        label: "Action",
        show: true,
        isOrder: false,
      },
    ],
    data: [
      {
        id: 1,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },

      {
        id: 2,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 3,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 4,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 5,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 6,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 7,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 8,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 9,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 10,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 11,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 12,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 13,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 14,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 15,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 16,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 17,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 18,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 19,
        name: "Abu hamid",
        title: "Abdul Hamid",
      },
      {
        id: 20,
        name: "Abu hamidd",
        title: "Abdul Hamid",
      },
    ],
  },
};
const tableSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    updateTableSlice: (state, action) => {},
  },
});
export const {} = tableSlice.actions;
export default tableSlice.reducer;
