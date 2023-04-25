import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import Apis
import {
  searchUserApi,
  updateUserApi,
  deleteUserApi,
  registerUserApi,
} from "../../apis/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mode: {
      editting: false,
      adding: false,
    },
    query: "",
    data: {
      _id: "",
      username: "",
      fullName: "",
      email: "",
      birthday: "",
      avatar: "",
      primaryLanguae: "",
      about: "",
      profession: "",
      password: "",
      country: "",
      role: "",
      createAt: "",
      isActive: "",
    },
  },
  reducers: {
    edit: (state, action) => {
      state.mode.editting = true;
      state.mode.adding = false;
    },

    cancel: (state, action) => {
      state.mode.editting = false;
      state.mode.adding = false;
    },
    add: (state, action) => {
      state.mode.editting = true;
      state.mode.adding = true;
      state.data = {
        _id: "",
        username: "",
        fullName: "",
        email: "",
        birthday: "",
        avatar: "",
        primaryLanguage: "",
        about: "",
        profession: "",
        password: "",
        country: "",
        role: "",
        createAt: "",
        isActive: "",
      };
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateUserData: (state, acion) => {
      state.data = acion.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUserRequest.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.query = action.meta.arg;
          state.data = action.payload;
          state.mode.editting = false;
          state.mode.adding = false;
        } else {
          state.data = {
            _id: "",
            username: "",
            fullName: "",
            email: "",
            birthday: "",
            avatar: "",
            primaryLanguage: "",
            about: "",
            profession: "",
            password: "",
            country: "",
            role: "",
            createAt: "",
            isActive: "",
          };
        }
      })
      .addCase(updateUserRequest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.mode.editting = false;
        state.mode.adding = false;
      })
      .addCase(deleteUserRequest.fulfilled, (state, action) => {
        state.data = {
          _id: "",
          username: "",
          fullName: "",
          email: "",
          birthday: "",
          avatar: "",
          primaryLanguage: "",
          about: "",
          profession: "",
          password: "",
          country: "",
          role: "",
          createAt: "",
          isActive: "",
        };
      })
      .addCase(registerUserRequest.fulfilled, (state, action) => {
        state.mode.editting = false;
        state.mode.adding = false;
      });
  },
});
export const searchUserRequest = createAsyncThunk("user", (query) => {
  return searchUserApi(query);
});

export const updateUserRequest = createAsyncThunk("updateUser", (payload) => {
  return updateUserApi(payload._id, payload);
});

export const deleteUserRequest = createAsyncThunk("deleteUser", (payload) => {
  return deleteUserApi(payload);
});

export const registerUserRequest = createAsyncThunk(
  "registerUser",
  (payload) => {
    return registerUserApi(payload);
  }
);

export default userSlice;
