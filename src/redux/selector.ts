import { RootState } from "./store";

export const openDashboardLogin = (state: RootState) =>
  state.getInitialStateValue;
export const setOpenDashboardLogin = (state: RootState) => state.openDashboardLogin