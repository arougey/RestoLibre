import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  rating: 0,
  name: '',
  image: '',
}

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setId, setRating, setName, setImage } = restaurantSlice.actions;

export const selectRating = (state) => state.restaurant.rating;
export const selectName = (state) => state.restaurant.name;
export const selectImage = (state) => state.restaurant.image;


export default restaurantSlice.reducer;



