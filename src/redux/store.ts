import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "./slice/darkmodeSlice";

// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  // Use persistReducer to enable data persistence
  reducer: {
    darkmode: darkmodeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
