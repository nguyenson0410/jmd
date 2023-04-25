import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCommentRequest } from "./commentSlice";

import axios from "axios";
import { useDispatch } from "react-redux";
// import Apis
import { searchWordApi, updateHistoryApi } from "../../apis/word";
const searchWordSlice = createSlice({
  name: "word",
  initialState: {
    status: "idle",
    query: "",
    data: {
      _id: "",
      ent_seq: "",
      isActive: "",
      createdAt: "",
      k_ele: [],
      r_ele: [],
      sense: {
        eng: [],
        ger: [],
        rus: [],
        dut: [],
        swe: [],
        fre: [],
        spa: [],
        hun: [],
        slv: [],
      },
    },
  },
  reducers: {
    queryUpdate: (state, action) => {
      state.query = action.payload;
    },
    definationUpdate: (state, action) => {
      state.defination = action;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchWordRequest.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchWordRequest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
        state.query = action.meta.arg;
      });
  },
});

export const searchWordRequest = createAsyncThunk(
  "searchWord",
  (query, { dispatch }) => {
    return searchWordApi(query);
  }
);

export const updateHistoryRequest = createAsyncThunk(
  "updateHistory",
  (query) => {
    return updateHistoryApi(query);
  }
);

export default searchWordSlice;
