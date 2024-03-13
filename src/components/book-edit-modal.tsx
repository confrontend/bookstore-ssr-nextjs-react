// BookEditModal.js or BookEditModal.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { Book } from "@/types/book";
import { updateBook } from "@/store/slices/books-slice";
import { closeEditBookModal, openEditBookModal } from "@/store/slices/ui-slice";

interface BookEditModalProps {
  book: Book; // The book to be edited
}

export const BookEditModal = () => {
  const dispatch = useDispatch();
  const { isEditBookModalOpen, editingBookId } = useSelector(
    (state: RootState) => state.ui
  );
  const bookToEdit = useSelector((state: RootState) =>
    state.books.list.find((book) => book.id === editingBookId)
  );

  const [bookDetails, setBookDetails] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
  });

  useEffect(() => {
    // Update local state when the bookToEdit changes
    if (bookToEdit) {
      setBookDetails({
        name: bookToEdit.name,
        price: bookToEdit.price,
        category: bookToEdit.category,
        description: bookToEdit.description,
      });
    }
  }, [bookToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingBookId) {
      dispatch(updateBook({ id: editingBookId, ...bookDetails }));
      dispatch(closeEditBookModal());
    }
  };

  if (!isEditBookModalOpen || !bookToEdit) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white dark:bg-gray-800 p-5 rounded-lg w-full max-w-lg">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg w-full max-w-lg">
          <button
            onClick={() => dispatch(closeEditBookModal())}
            className="absolute top-0 right-0 p-4"
          >
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
            Edit Book
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
