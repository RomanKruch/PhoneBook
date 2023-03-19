import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import s from './PhoneBookForm.module.css';
import { TextField, Button } from '@mui/material';
import NotificationManager from 'react-notifications/lib/NotificationManager';

const PhoneBookForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onAddContact = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      NotificationManager.warning('Contact already here!', '', 5000);
      return;
    }

    const contact = {
      name,
      phone,
    };

    dispatch(addContact(contact));

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onAddContact} className={s.form}>
      <TextField
        variant="filled"
        label="Name"
        onChange={e => setName(e.target.value)}
        value={name}
        required
        maxLength="15"
        type="text"
        size="small"
      />

      <TextField
        variant="filled"
        label="Number"
        onChange={e => setPhone(e.target.value)}
        value={phone}
        required
        maxLength="11"
        type="number"
        size="small"
      />

      <Button type="submit" variant="outlined">
        Add contact
      </Button>
    </form>
  );
};

export default PhoneBookForm;
