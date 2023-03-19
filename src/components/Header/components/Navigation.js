import { NavLink } from 'react-router-dom';
import s from '../Header.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      to="/phoneBook"
      className={({ isActive }) => (isActive ? s.active : s.link)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
