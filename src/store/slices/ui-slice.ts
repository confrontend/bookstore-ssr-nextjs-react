import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  isAddBookModalOpen: boolean;
  isEditBookModalOpen: boolean;
  editingBookId: string | null;
};

const initialState: UIState = {
  isAddBookModalOpen: false,
  isEditBookModalOpen: false,
  editingBookId: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAddBookModal: (state) => {
      state.isAddBookModalOpen = !state.isAddBookModalOpen;
    },
    openEditBookModal: (state, action: PayloadAction<string>) => {
      state.isEditBookModalOpen = true;
      state.editingBookId = action.payload;
    },
    closeEditBookModal: (state) => {
      state.isEditBookModalOpen = false;
      state.editingBookId = null;
    },
  },
});

export const { toggleAddBookModal, openEditBookModal, closeEditBookModal } =
  uiSlice.actions;

export default uiSlice.reducer;
