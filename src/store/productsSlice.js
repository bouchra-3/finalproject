
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "T-shirt",
      price: 2500,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", // ✅ URL en ligne
    },
    {
      id: 2,
      name: "Chaussures",
      price: 7500,
      image: "https://images.unsplash.com/photo-1600180758895-174b1a2bbbc0",
    },
    {
      id: 3,
      name: "Sac",
      price: 5500,
      image: "https://images.unsplash.com/photo-1542293787938-c9e299b8805f",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
