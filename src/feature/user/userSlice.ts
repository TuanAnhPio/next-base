import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getAuthData, UserResponse } from "@/services/user";

export const getProfile = createAsyncThunk("user/getProfile", async () => {
  return getAuthData();
});

type StateType = {
  data: UserResponse | {};
  loading: string;
};
// Define the initial state using that type
const initialState: StateType = {
  data: {},
  loading: "idle",
};

export const user = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "fulfilled";
    });
  },
});

export const {} = user.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const getUser = (state: RootState) => state.user;

export default user.reducer;
