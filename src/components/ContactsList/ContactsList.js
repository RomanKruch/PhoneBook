import { useSelector } from 'react-redux';
import Contact from '../Contact';
import s from './ContactsList.module.css';

const ContactsList = ({ onOpenModal }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normFilter = filter.toLowerCase();
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter),
  );

  return (
    <ul className={s.list}>
      {filtered.map(contact => (
        <Contact
          key={contact._id}
          contact={contact}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
