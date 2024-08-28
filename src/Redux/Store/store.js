// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice"; // Import the default export

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use 'auth' as the key here
  },
});

export default store;
