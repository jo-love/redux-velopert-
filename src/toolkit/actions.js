import { createAction, createReducer } from "@reduxjs/toolkit";

const INCREMENT = "INCREAMENT"; // 액션
const DECREMENT = "DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const increment2 = createAction(INCREMENT, (amount) => amount);

increment(3);

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload,
});
