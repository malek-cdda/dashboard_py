import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: localStorage.getItem("theme"),
};
const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggleDarkmode: (state, action) => {
      console.log(action);
      state.darkmode = state.darkmode;
    },
  },
});
export const { toggleDarkmode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
