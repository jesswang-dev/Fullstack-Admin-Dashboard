import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './global';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
