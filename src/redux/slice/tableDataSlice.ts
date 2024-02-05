import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      img: "/assets/person.jpg",
      author: "Abul Hasem",
      name: "Role",
      inputs: 3,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 2,
      img: "/assets/person.jpg",
      author: "Sunny",
      name: "Permission",
      inputs: 2,
      db: "postgres",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 3,
      img: "/assets/person.jpg",
      author: "Maruf",
      name: "User",
      inputs: 4,
      db: "sqlite",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 4,
      img: "/assets/person.jpg",
      author: "Mijan",
      name: "User",
      inputs: 4,
      db: "mysql",
      crud: false,
      ws: true,
      inMemory: true,

      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 5,
      img: "/assets/person.jpg",
      author: "Yeasir",
      name: "User",
      inputs: 4,
      db: "",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 6,
      img: "/assets/person.jpg",
      author: "Imran",
      name: "User",
      inputs: 4,
      db: "mongoose",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "+2"],
      status: true,
    },
    {
      id: 7,
      img: "/assets/person.jpg",
      author: "Toukir raju",
      name: "User",
      inputs: 4,
      db: "postgres",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission"],
      status: false,
      action: true,
    },
    {
      id: 8,
      img: "/assets/person.jpg",
      name: "User",
      inputs: 4,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 8,
      img: "/assets/person.jpg",
      name: "User",
      inputs: 4,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 8,
      img: "/assets/person.jpg",
      name: "User",
      inputs: 4,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 8,
      img: "/assets/person.jpg",
      name: "User",
      inputs: 4,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 8,
      img: "/assets/person.jpg",
      name: "User",
      inputs: 4,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 8,
      img: "/assets/person.jpg",
      name: "User",
      inputs: 4,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
  ],
};
const tableSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    updateTableSlice: (state, action) => {},
  },
});
export const { updateTableSlice } = tableSlice.actions;
export default tableSlice.reducer;