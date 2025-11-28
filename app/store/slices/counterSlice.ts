import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchIncrementAmount = createAsyncThunk(
  "counter/fetchIncrementAmount",
  async (amount: number, thunkAPI) => {
    await new Promise((res) => setTimeout(res, 600));
    return amount;
  }
);

type CounterState = {
  value: number;
  status: "idle" | "loading" | "failed";
};

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncrementAmount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIncrementAmount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(fetchIncrementAmount.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
