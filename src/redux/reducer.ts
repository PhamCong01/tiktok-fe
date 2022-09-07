import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../app/interface";
const initialState: InitialState = {
  openDashboardLogin: false,
};

export const rootReducer = createSlice({
  name: "tiktok",
  initialState,
  reducers: {
    openDashboardLogin: (state) => {
      state.openDashboardLogin = !state.openDashboardLogin;
    },
  },
});

export const { openDashboardLogin } = rootReducer.actions;
export const getInitialStateValue = rootReducer.getInitialState
