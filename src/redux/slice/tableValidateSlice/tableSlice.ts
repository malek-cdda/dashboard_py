import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: {
    tableTitle: {
      author: {
        label: "Author",
        show: true,
        isOrder: false,
      },
      name: {
        label: "Name",
        show: true,
        isOrder: true,
      },

      inputs: {
        label: "Inputs",
        show: true,
        isOrder: false,
      },
      db: {
        label: "DB",
        show: true,
        isOrder: false,
      },
      crud: {
        label: "Crud",
        show: true,
        isOrder: false,
      },
      ws: {
        label: "Ws",
        show: true,
        isOrder: false,
      },
      inMemory: {
        label: "In Memory",
        show: true,
        isOrder: false,
      },
      relation: {
        label: "Relation",
        show: true,
        isOrder: false,
      },
      status: {
        label: "Status",
        show: true,
        isOrder: false,
      },
      action: {
        label: "Action",
        show: true,
        isOrder: false,
      },
    },
    data: [
      {
        id: 1,
        author: {
          img: "/assets/person.jpg",
          name: "Abul Hasem",
          type: "check_img",
        },
        img: "/assets/person.jpg",
        name: "Role",
        inputs: 3,
        db: {
          type: "badge",
          name: "Mongodb",
        },
        crud: false,
        ws: true,
        inMemory: true,
        relation: ["Role", "Permission", "+2"],
        status: true,
        action: {
          type: "action",
        },
      },
      {
        id: 2,
        author: {
          img: "/assets/person.jpg",
          name: "Sunny",
          type: "check_img",
        },

        img: "/assets/person.jpg",
        name: "User",
        inputs: 3,
        db: {
          type: "badge",
          name: "Postgres",
        },
        crud: true,
        ws: true,
        inMemory: false,
        relation: ["Role"],
        status: true,
        action: {
          type: "action",
        },
      },
      {
        id: 3,
        author: {
          img: "/assets/person.jpg",
          name: "Maruf",
          type: "check_img",
        },
        img: "/assets/person.jpg",
        name: "User",
        inputs: 3,
        db: {
          type: "badge",
          name: "Mongodb",
        },
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: {
          type: "action",
        },
      },
      {
        id: 4,
        author: {
          img: "/assets/person.jpg",
          name: "Mijanur",
          type: "check_img",
        },
        img: "/assets/person.jpg",
        name: "Permission",
        inputs: 3,
        db: {
          type: "badge",
          name: "Mongodb",
        },
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: {
          type: "action",
        },
      },
      {
        id: 5,
        author: {
          img: "/assets/person.jpg",
          name: "Yeasir",
          type: "check_img",
        },
        img: "/assets/person.jpg",
        name: "Domain",
        inputs: 3,
        db: {
          type: "badge",
          name: "Mongodb",
        },
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: {
          type: "action",
        },
      },
      {
        id: 6,
        author: {
          img: "/assets/person.jpg",
          name: "Imran",
          type: "check_img",
        },
        img: "/assets/person.jpg",
        name: "Domain",
        inputs: 3,
        db: {
          type: "badge",
          name: "Mongodb",
        },
        crud: true,
        ws: true,
        inMemory: true,
        relation: ["Role"],
        status: false,
        action: {
          type: "action",
        },
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
