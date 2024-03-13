"use client";
import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import { ReactNode, useEffect, useRef } from "react";
import { addBooks } from "./store/slices/books-slice";
import { Book } from "./types/book";

import { configureStore } from "@reduxjs/toolkit";

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = useRef(makeStore()).current;

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
