import { configureStore } from "@reduxjs/toolkit";

// import Redux slice
import { filtersSlice } from "./slices/filtersSlice";
import wordSlice from "./slices/wordSlice";
import suggestionSlice from "./slices/suggestionSlice";
import { loginSlice } from "./slices/loginSlice";
import commentSlice from "./slices/commentSlice";
import wordlistSlice from "./slices/wordlistSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    word: wordSlice.reducer,
    suggestion: suggestionSlice.reducer,
    login: loginSlice.reducer,
    comment: commentSlice.reducer,
    wordlist: wordlistSlice.reducer,
  },
});
export default store;
