import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import Apis
import { loginApi } from "../../apis/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    mode: {
      isLoginng: false,
    },
    data: {
      username: "",
      role: "",
    },
  },
  reducers: {
    logout: (state, action) => {
      state.mode.isLoginng = false;
      state.data = {
        username: "",
        role: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.mode.isLoginng = true;
      state.data.username = action.payload.username;
      state.data.role = action.payload.role;
    });
  },
});

export const loginRequest = createAsyncThunk("login", (payload) => {
  return loginApi(payload);
});

export default authSlice;
