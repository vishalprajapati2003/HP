import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";

export const store = configureStore({
  reducer: {
    user: userReducer, // Adding the user reducer to the store
  },
});
