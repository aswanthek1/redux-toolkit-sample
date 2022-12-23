import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return response;
});

const INITIAL_STATE = {
  userDetails: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      console.log("loading start");
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.userDetails.push(action.payload.data);
      console.log("success");
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("loading falied");
    },
  },
});

export default userSlice.reducer;
