import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: {
    tableTitle: {
      author: "Author",
      name: "Name",
      inputs: "Inputs",
      db: "DB",
      crud: "Crud",
      ws: "Ws",
      inMemory: "In Memory",
      relation: "Relation",
      status: "Status",
      action: "Action",
    },
    data: [
      {
        id: 1,
        author: "Tuan",
        img: "/assets/person.jpg",
        name: "Role",
        inputs: 3,
        db: "Mongodb",
        crud: true,
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
        inMemory: true,
        relation: ["Role"],
        status: true,
        action: true,
      },
    ],
  },
};
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});
export const {} = tableSlice.actions;
export default tableSlice.reducer;
