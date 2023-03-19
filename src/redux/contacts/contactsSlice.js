import { createSlice } from "@reduxjs/toolkit";
import { getAllContacts, deleteContact, editContact, addContact } from "./contactsOperations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    extraReducers: {
        [getAllContacts.fulfilled] : (_,{payload}) => [...payload],
        [deleteContact.fulfilled] : (state, {payload}) => state.filter(item => item._id !== payload),
        [editContact.fulfilled] : (state, {payload}) => state.map(contact => contact._id === payload._id ? payload : contact),
        [addContact.fulfilled] : (state, action) => [...state, action.payload]
    }
})

export default contactsSlice.reducer;