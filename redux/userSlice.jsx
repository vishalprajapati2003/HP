import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload; // Store user data
    },
    logout: (state) => {
      state.user = null; // Clear user data on logout
    },
  },
});

export const { getUser, logout } = userSlice.actions;
export default userSlice.reducer;
