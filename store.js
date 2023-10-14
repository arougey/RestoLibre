import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./slices/SearchFilterSlice";

export const store = configureStore({
  reducer: {
    Ssearch: searchSliceReducer,
  },
});