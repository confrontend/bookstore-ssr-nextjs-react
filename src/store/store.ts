// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books-slice";
import uiReducer from "./slices/ui-slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      books: booksReducer,
      ui: uiReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
