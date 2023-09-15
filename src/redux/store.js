import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    filter: filterReducer,
  },
});
