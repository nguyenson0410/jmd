import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import Apis
import { getAllWordsApi } from "../../apis/words";

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    page: 1,
    data: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getAllWordsRequest.fulfilled, (state, action) => {
      state.page = action.meta.arg;
      state.data = action.payload;
    });
  },
});

export const getAllWordsRequest = createAsyncThunk("words", (page) => {
  return getAllWordsApi(page);
});

export default wordsSlice;
