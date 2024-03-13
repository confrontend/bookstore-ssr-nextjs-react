"use client";

import { toggleAddBookModal } from "@/store/slices/ui-slice";
import { RootState } from "@/store/store";

import { useStore } from "react-redux";

export const BookAddButton = () => {
  const store = useStore<RootState>();
  const onAdd = () => {
    store.dispatch(toggleAddBookModal());
  };
  return (
    <button
      onClick={() => onAdd()}
      className="my-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/50 transition duration-300 ease-in-out flex items-center justify-center"
    >
      <svg
        className="w-6 h-6 mr-2 -ml-1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 4v16m8-8H4"></path>
      </svg>
      Add Book
    </button>
  );
};
