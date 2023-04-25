import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./slices/wordSlice";
import wordsSlice from "./slices/wordsSlice";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import usersSlice from "./slices/usersSlice";

// import Redux slice

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    users: usersSlice.reducer,
    word: wordSlice.reducer,
    words: wordsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
