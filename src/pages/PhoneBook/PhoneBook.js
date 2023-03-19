import { useState, useEffect } from 'react';
import PhoneBookForm from '../../components/PhoneBookForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import EditModal from '../../components/EditModal';
import s from './PhoneBook.module.css';
import { getAllContacts } from '../../redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';

const PhoneBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onOpenModal = currentId => {
    setIsOpen(!isOpen);
    setIdToEdit(currentId);
  };

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>PhoneBook</h2>
      <PhoneBookForm />

      {contacts.length !== 0 && (
        <>
          <h2 className={s.title}>Contacts</h2>

          <Filter />

          <ContactsList onOpenModal={onOpenModal} />
        </>
      )}

      {isOpen && <EditModal onOpenModal={onOpenModal} idToEdit={idToEdit} />}
    </div>
  );
};

export default PhoneBook;
