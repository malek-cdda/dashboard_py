import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "./slice/tableDataSlice";
import tableDataSlice from "./slice/tableDataSlice";
import tableSlice from "./slice/tableValidateSlice/tableSlice";

// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  // Use persistReducer to enable data persistence
  reducer: {
    darkmode: darkmodeSlice,
    tableData: tableSlice,
    data: tableDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
