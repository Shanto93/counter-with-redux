import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  count: number;
};

const initialState: TInitialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementWithPayload: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, incrementWithPayload } =
  counterSlice.actions;
export default counterSlice.reducer;
