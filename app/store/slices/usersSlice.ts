import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
});

interface UsersState {
  list: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  list: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;