// src/redux/slices/booksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../types/book";

type BooksState = {
  list: Book[];
};

const initialState: BooksState = {
  list: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.list.push(action.payload);
    },
    addBooks: (state, action: PayloadAction<Book[]>) => {
      state.list.push(...action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.list.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        // Redux Toolkit's createReducer API uses Immer internally automatically.
        // So, it's already safe to "mutate" state in reducer function.
        // @see {@link https://redux-toolkit.js.org/usage/immer-reducers}
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook, addBooks } = booksSlice.actions;

export default booksSlice.reducer;
