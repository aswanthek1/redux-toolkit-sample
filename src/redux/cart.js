import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  userDetails: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartList.find((item) => 
        item.id === action.payload.id
      );
      if (itemExist) {
        state.cartList.forEach((item) => {
          if (item?.id === action.payload.id) {
            item.count++;
          }
        });
      } else {
        state.cartList.push({ 
          ...action.payload,
          count: 1,
        });
      }
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === productId) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === productId) {
          item.count--;
        }
      });
    },
  },

});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
