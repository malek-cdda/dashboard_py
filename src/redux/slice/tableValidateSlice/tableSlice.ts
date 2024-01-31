import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialData: [
    {
      id: 1,
      author: "Tuan",
      img: "https://picsum.photos/200/300",
      name: "Role",
      inputs: 3,
      db: "mongodb",
      crud: true,
      ws: true,
      inMemory: true,
      relation: true,
      status: true,
      action: true,
    },
    {
      id: 2,
      author: "Rafik",
      img: "https://picsum.photos/200/300",
      name: "User",
      inputs: 3,
      db: "mongodb",
      crud: true,
      ws: true,
      inMemory: true,
      relation: true,
      status: true,
      action: true,
    },
  ],
};
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});
export const {} = tableSlice.actions;
export default tableSlice.reducer;
