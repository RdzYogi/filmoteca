import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import dataSliceReducer from "./slices/dataSlice";


//
export default store = configureStore({
  reducer: {
    userManager : userSliceReducer,
    dataManager : dataSliceReducer
  }
})
