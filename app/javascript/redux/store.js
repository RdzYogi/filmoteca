import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";


//
export default store = configureStore({
  reducer: {
    userManager : userSliceReducer
  }
})
