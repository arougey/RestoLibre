import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./slices/SearchFilterSlice";
import navReducer from "./slices/NavSlice"
import restaurantReducer from "./slices/RestaurantSlice"

export const store = configureStore({
  reducer: {
    srch: searchSliceReducer,
    nav: navReducer,
    restaurant: restaurantReducer
  },
});