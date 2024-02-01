import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: {
    tableTitle: {
      author: {
        label: "Author",
        show: false,
      },
      name: {
        label: "Name",
        show: true,
      },

      inputs: {
        label: "Inputs",
        show: true,
      },
      db: {
        label: "DB",
        show: true,
      },
      crud: {
        label: "Crud",
        show: true,
      },
      ws: {
        label: "Ws",
        show: true,
      },
      inMemory: {
        label: "In Memory",
        show: false,
      },
      relation: {
        label: "Relation",
        show: false,
      },
      status: {
        label: "Status",
        show: false,
      },
      action: {
        label: "Action",
        show: false,
      },
    },
    data: [
      {
        id: 1,
        author: "Tuan",
        img: "/assets/person.jpg",
        name: "Role",
        inputs: 3,
        db: "Mongodb",
        crud: false,
        ws: true,
        inMemory: true,
        relation: ["Role", "Permission", "+2"],
        status: true,
        action: true,
      },
      {
        id: 2,
        author: "Rafik",
        img: "/assets/person.jpg",
        name: "User",
        inputs: 3,
        db: "Mongodb",
        crud: true,
        ws: true,
        inMemory: false,
        relation: ["Role"],
        status: true,
        action: true,
      },
      {
        id: 3,
        author: "Rafik",
        img: "/assets/person.jpg",
        name: "User",
        inputs: 3,
        db: "Mongodb",
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: true,
      },
      {
        id: 4,
        author: "Rafik",
        img: "/assets/person.jpg",
        name: "Permission",
        inputs: 3,
        db: "Mongodb",
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: true,
      },
      {
        id: 5,
        author: "Rafik",
        img: "/assets/person.jpg",
        name: "Domain",
        inputs: 3,
        db: "Postgres",
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: true,
      },
    ],
  },
};
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateTableData: (state, { payload }) => {
      state.tableData = payload;
    },
  },
});
export const { updateTableData } = tableSlice.actions;
export default tableSlice.reducer;
