import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sampleModalReducer from "redux/reducer/modal";
const rootReducer = combineReducers({
  modal: sampleModalReducer,
});

export default configureStore({
  reducer: rootReducer,
});
