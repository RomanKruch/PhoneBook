import { createAsyncThunk } from '@reduxjs/toolkit';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import axios from 'axios';

export const getAllContacts = createAsyncThunk(
  'getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts/');
      return data.data.contacts;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const editContact = createAsyncThunk(
  'editContact',
  async ([id, dataToEdit], { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/contacts/${id}`, dataToEdit);
      return data.data.contact;
    } catch {
      NotificationManager.warning("Can't update contact :(", '', 5000);
      return rejectWithValue(null);
    }
  },
);

export const addContact = createAsyncThunk(
  'addContact',
  async (contactToAdd, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contactToAdd);
      return data.data.contact;
    } catch {
      NotificationManager.warning("Can't create contact :(", '', 5000);
      return rejectWithValue(null);
    }
  },
);
