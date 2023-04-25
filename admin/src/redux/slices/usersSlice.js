import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import Apis
import { getAllUsersApi } from "../../apis/users";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    page: 1,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsersRequest.fulfilled, (state, action) => {
      state.page = action.meta.arg;
      state.data = action.payload;
    });
  },
});

export const getAllUsersRequest = createAsyncThunk("users", (page) => {
  return getAllUsersApi(page);
});

export default usersSlice;
