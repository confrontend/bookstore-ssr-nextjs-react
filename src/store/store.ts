// src/redux/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books-slice";
import uiReducer from "./slices/ui-slice";

const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
