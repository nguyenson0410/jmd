import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    error: false,
    message: "",
    user: {
      username: "",
      fullName: "",
      primaryLanguage: "",
      history: "",
      role: "",
    },
  },
  reducers: {
    logout: (state, action) => {
      state.error = false;
      state.message = "";
      state.user = {
        username: "",
        fullName: "",
        primaryLanguage: "",
        history: "",
        role: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.message = action.payload.message;
        state.error = action.payload.error;
        state.user = {
          username: "",
          fullName: "",
          primaryLanguage: "",
          history: "",
          role: "",
        };
      } else {
        state.message = action.payload.message;
        state.error = action.payload.error;
        state.user = action.payload.user;
      }
    });
  },
});

export const loginRequest = createAsyncThunk("login", async (bodyObj) => {
  const res = await axios.post("http://localhost:5000/api/auth/login", bodyObj);
  return res.data;
});
