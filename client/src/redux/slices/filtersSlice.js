import { createSlice } from "@reduxjs/toolkit";
export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    noun: true,
    verb: true,
    adj: true,

    languages: ["eng", "fre", "ger"],
  },
  reducers: {
    nounToggle: (state, action) => {
      state.noun = action.payload;
    },
    verdToggle: (state, action) => {
      state.verb = action.payload;
    },
    adjToggle: (state, action) => {
      state.adj = action.payload;
    },
    languageUpdate: (state, action) => {
      state.languages = action.payload;
    },
  },
});
