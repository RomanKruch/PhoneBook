import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/contactsOperations';
import { TextField, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import s from './EditModal.module.css';

const EditModal = ({ onOpenModal, idToEdit }) => {
  const contacts = useSelector(state => state.contacts);
  const contactToEdit = contacts.find(contact => contact._id === idToEdit);

  const [name, setName] = useState(contactToEdit.name);
  const [phone, setPhone] = useState(contactToEdit.phone);

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const editedContact = {
      name,
      phone,
    };

    dispatch(editContact([idToEdit, editedContact]));
    onOpenModal(null);
  };

  return (
    <div className={s.over}>
      <div className={s.modal}>
        <IconButton
          className={s.close_btn}
          type="button"
          onClick={() => onOpenModal(null)}
        >
          <Close />
        </IconButton>

        <form className={s.form} onSubmit={onSubmit}>
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
            type="text"
            size="small"
          />

          <Button type="submit" variant="outlined">
            Edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
