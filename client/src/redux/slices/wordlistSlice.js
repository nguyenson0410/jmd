import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import Apis
import { getWordlistApi } from "../../apis/wordlist";

const wordlistSlice = createSlice({
  name: "wordlist",
  initialState: {
    item: [
      {
        _id: "",
        listName: "",
        data: [],
      },
    ],
  },
});

export default wordlistSlice;
