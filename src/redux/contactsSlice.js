import { createSlice } from "@reduxjs/toolkit";
import contactData from "../contacts.json";

export const defaultValue = {
  name: "",
  number: ""
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactData,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const selectedContacts = (state) => {
  return state.contacts.items;
}
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;