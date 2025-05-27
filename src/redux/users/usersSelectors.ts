import { type RootState } from "../store";

export const selectUsers = (state: RootState) => state.users.data;
export const selectStatus = (state: RootState) => state.users.status;
export const selectError = (state: RootState) => state.users.error;
export const selectSortField = (state: RootState) => state.users.sortField;
export const selectSortOrder = (state: RootState) => state.users.sortOrder;
