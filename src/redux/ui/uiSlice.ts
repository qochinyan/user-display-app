import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isHeaderOpen: boolean;
  usersView: "card" | "list";
}

const initialState: UIState = {
  isHeaderOpen: JSON.parse(localStorage.getItem("isHeaderOpen") ?? "true"),
  usersView: (localStorage.getItem("view") as "card" | "list") || "card",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleHeader(state) {
      state.isHeaderOpen = !state.isHeaderOpen;
      localStorage.setItem("isHeaderOpen", JSON.stringify(state.isHeaderOpen));
    },
    toggleUsersView(state) {
      state.usersView = state.usersView === "card" ? "list" : "card";
      localStorage.setItem("view", state.usersView);
    },
  },
});

export const { toggleHeader, toggleUsersView } = uiSlice.actions;
export default uiSlice.reducer;
