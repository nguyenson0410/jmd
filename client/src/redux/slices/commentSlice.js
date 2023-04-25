import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import Apis
import { addCommentApi, searchCommentApi } from "../../apis/comment";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    wordId: "",
    status: "idle",
    data: [],
  },
  reducers: {
    wordIdUpdate: (state, action) => {
      state.wordId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchCommentRequest.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchCommentRequest.fulfilled, (state, action) => {
        state.wordId = action.meta.arg;
        state.status = "idle";
        state.data = action.payload || [];
      });
  },
});

export const addCommentRequest = createAsyncThunk(
  "addComment",
  async (payload) => {
    return addCommentApi(payload.wordId, payload.text);
  }
);

export const searchCommentRequest = createAsyncThunk(
  "getComment",
  async (wordId) => {
    return searchCommentApi(wordId);
    
  }
);

export default commentSlice;
