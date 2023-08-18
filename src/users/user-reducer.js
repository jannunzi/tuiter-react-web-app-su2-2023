import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  profileThunk,
  logoutThunk,
} from "./service";

const initialState = {
  currentUser: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
  },
});

export default userReducer.reducer;
