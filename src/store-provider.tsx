"use client";
import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import { ReactNode, useRef } from "react";

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = useRef(makeStore()).current;

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
