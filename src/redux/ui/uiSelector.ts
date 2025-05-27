import { type RootState } from "../store";

export const selectIsHeaderOpen = (state: RootState) => state.ui.isHeaderOpen;
export const selectUsersView = (state: RootState) => state.ui.usersView;
