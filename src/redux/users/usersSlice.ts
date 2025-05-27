import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { type UsersState, type User, type SortField, type SortOrder } from "./usersTypes";

export const fetchUsers = createAsyncThunk<User[]>("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data.map(
    (u: { id: any; name: any; company: { name: any }; address: { street: any; city: any }; username: any }) => ({
      id: u.id,
      name: u.name,
      organization: u.company?.name || "",
      address: `${u.address?.street}, ${u.address?.city}` || "",
      worker: u.username,
      products: `Product ${u.id}`,
    })
  );
});

const initialState: UsersState = {
  data: [],
  status: "idle",
  error: null,
  sortField: "name",
  sortOrder: "asc",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSortField(state, action: PayloadAction<SortField>) {
      if (state.sortField === action.payload) {
        state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
      } else {
        state.sortField = action.payload;
        state.sortOrder = "asc";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Fetch error";
      });
  },
});

export const { setSortField } = usersSlice.actions;
export default usersSlice.reducer;
