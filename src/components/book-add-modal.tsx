"use client";

import { Book } from "@/types/book";
import React, { useState } from "react";
import { toggleAddBookModal } from "@/store/slices/ui-slice";
import { RootState } from "@/store/store";
import { useSelector, useStore } from "react-redux";
import { addBook } from "@/store/slices/books-slice";
import { v4 as uuidv4 } from "uuid";

type BookDetails = Omit<Book, "id">;

export const BookAddModal = () => {
  const store = useStore<RootState>();
  const isAddBookModalOpen = useSelector(
    (state: RootState) => state.ui.isAddBookModalOpen
  );
  const [bookDetails, setBookDetails] = useState<BookDetails>({
    name: "",
    price: 0,
    category: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      ...bookDetails,
      price: bookDetails.price,
    };

    store.dispatch(addBook(newBook));
    toggleModal();
    setBookDetails({ name: "", price: 0, category: "", description: "" });
  };

  const toggleModal = () => {
    store.dispatch(toggleAddBookModal());
  };

  if (!isAddBookModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white dark:bg-gray-800 p-5 rounded-lg w-full max-w-lg">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg w-full max-w-lg">
          <button onClick={toggleModal} className="absolute top-0 right-0 p-4">
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Add a New Book
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="input bg-gray-100 dark:bg-gray-700 border-none w-full p-2 rounded"
              value={bookDetails.name}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, name: e.target.value })
              }
              placeholder="Name"
              required
            />
            <input
              className="input bg-gray-100 dark:bg-gray-700 border-none w-full p-2 rounded"
              value={bookDetails.price}
              type="number"
              onChange={(e) =>
                setBookDetails({
                  ...bookDetails,
                  price: parseFloat(e.target.value),
                })
              }
              placeholder="Price"
              required
            />
            <input
              className="input bg-gray-100 dark:bg-gray-700 border-none w-full p-2 rounded"
              value={bookDetails.category}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, category: e.target.value })
              }
              placeholder="Category"
              required
            />
            <textarea
              className="textarea bg-gray-100 dark:bg-gray-700 border-none w-full p-2 rounded"
              value={bookDetails.description}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, description: e.target.value })
              }
              placeholder="Description"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
