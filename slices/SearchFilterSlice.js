import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  dresscode: null,
  price: null,
  origin: null,
  rating: null,
  distance: null,
  groupsize: null,
}

const searchSlice = createSlice({
  name: 'Sslice',
  initialState,
  reducer: {
    setDressCode: (state, action) => {
      state.origin = action.payload;
    },
    setPrice: (state, action) => {
      state.origin = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setRating: (state, action) => {
      state.origin = action.payload;
    },
    setDistance: (state, action) => {
      state.origin = action.payload;
    },
    setGroupSize: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setDressCode, setPrice, setOrigin, setRating, setDistance, setGroupSize } = searchSlice.actions;

// Selectors
export const selectDressCode = (state) => state.searchSlice.origin;
export const selectPrice = (state) => state.searchSlice.origin;
export const selectOrigin = (state) => state.searchSlice.origin;
export const selectRating = (state) => state.searchSlice.origin;
export const selectDistance = (state) => state.searchSlice.origin;
export const selectGroupSize = (state) => state.searchSlice.origin;

export default searchSlice.reducer;



