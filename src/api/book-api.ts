import { Book } from "./../types/book";
import { mockBooks } from "@/mocks/books-mocked";

export const getBooks = async (): Promise<Book[]> => {
  // await fakeWait(1);
  return mockBooks;
};

// TODO move to a util module
const fakeWait = async (waitInSecs: number) => {
  return new Promise((resolve) => setTimeout(resolve, waitInSecs * 1000));
};
