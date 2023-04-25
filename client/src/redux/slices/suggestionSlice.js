import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    status: "idle",
    words: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(suggestionRequest.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(suggestionRequest.fulfilled, (state, action) => {
        state.words = action.payload;
        state.status = "idle";
      });
  },
});

export const suggestionRequest = createAsyncThunk(
  "suggestion",
  async (query) => {
    if (!query) {
      return [];
    } else {
      const res = await axios.get(
        `http://localhost:5000/api/word/suggest?query=${query}`
      );

      return res.data;
    }
  }
);
export default suggestionSlice;
