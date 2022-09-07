import { configureStore } from "@reduxjs/toolkit";

import { openDashboardLogin,getInitialStateValue } from "./reducer";
const store = configureStore({
  reducer: {
    openDashboardLogin,
    getInitialStateValue,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch