import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import s from './Contact.module.css';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Contact = ({ contact, onOpenModal }) => {
  const dispatch = useDispatch();
  const { name, phone, _id } = contact;

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <p className={s.text}>
        {name}:<span className={s.span}>{phone}</span>
      </p>

      <div>
        <IconButton type="button" onClick={() => onDelete(_id)}>
          <Delete />
        </IconButton>
        <IconButton type="button" onClick={() => onOpenModal(_id)}>
          <Edit />
        </IconButton>
      </div>
    </li>
  );
};

export default Contact;
