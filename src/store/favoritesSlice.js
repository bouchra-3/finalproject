
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // liste des produits favoris
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearFavorites: (state) => {
      state.items = [];
    }
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
