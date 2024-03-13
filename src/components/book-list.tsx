"use client";
import { addBooks, deleteBook } from "@/store/slices/books-slice";
import { openEditBookModal } from "@/store/slices/ui-slice";

import { RootState } from "@/store/store";
import { Book } from "@/types/book";
import { useRef } from "react";
import { useSelector, useStore } from "react-redux";

export const BookList = ({ books }: { books: Book[] }) => {
  const store = useStore<RootState>();
  const initialized = useRef(false);
  if (!initialized.current) {
    // Sync server-side state with client-side state.
    store.dispatch(addBooks(books));
    initialized.current = true;
  }

  const clientBooks = useSelector((state: RootState) => state.books.list);

  const onDelete = (bookId: string) => {
    store.dispatch(deleteBook(bookId));
  };

  const openEditModal = (id: string) => {
    store.dispatch(openEditBookModal(id));
  };

  return (
    <div className="space-y-4">
      {clientBooks.map((book) => (
        <div
          onClick={() => openEditModal(book.id)}
          key={book.id}
          className="p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out rounded-lg bg-white dark:bg-gray-800 dark:hover:shadow-gray-600/50"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            {book.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{book.category}</p>{" "}
          <div className="flex justify-between items-center mt-3">
            <span className="text-gray-800 dark:text-gray-200 font-bold">
              ${book.price}
            </span>
            <button
              onClick={() => onDelete(book.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
