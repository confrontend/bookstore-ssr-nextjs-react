import { getBooks } from "@/api/book-api";
import { BookAddButton } from "@/components/book-add-button";
import { BookAddModal } from "@/components/book-add-modal";
import { BookEditModal } from "@/components/book-edit-modal";
import { BookList } from "@/components/book-list";

import StoreProvider from "@/store-provider";

export default async function Home() {
  // Initially load books from server. This preserve the benefits of SSR.
  const books = await getBooks();

  return (
    <main className="container mx-auto py-8 px-4">
      <StoreProvider>
        <BookAddButton />
        <BookAddModal />
        <BookEditModal />
        <BookList books={books} />
      </StoreProvider>
    </main>
  );
}
