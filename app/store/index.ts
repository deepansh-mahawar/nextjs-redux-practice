import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import lightReducer from "./slices/lightSlice";
import foodReducer from "./slices/foodSlice";
import cartReducer from "./slices/cartSlice";
import usersReducer from "./slices/usersSlice";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    light: lightReducer,
    food: foodReducer,
    cart: cartReducer,
    users: usersReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
