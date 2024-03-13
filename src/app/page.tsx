import { getBooks } from "@/api/book-api";
import { BookAddButton } from "@/components/book-add";
import { BookAddModal } from "@/components/book-add-modal";
import { BookEditModal } from "@/components/book-edit-modal";
import { BookList } from "@/components/book-list";

import StoreProvider from "@/store-provider";
import { Book } from "@/types/book";

export default async function Home() {
  // Initially load books from server. This preserve the benefits of SSR.
  const books = await getBooks();

  return (
    <main className="container mx-auto py-8 px-4">
      <StoreProvider>
        <BookAddButton />
        <BookAddModal />
        <BookEditModal
          book={{
            id: "",
            name: "",
            price: 0,
            category: "",
            description: "",
          }}
        />
        <BookList books={books} />
      </StoreProvider>
    </main>
  );
}
