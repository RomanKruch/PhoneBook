import { NavLink } from 'react-router-dom';
import s from '../Header.module.css';

const UserNav = () => (
  <nav className={s.nav}>
    <NavLink
      to="/signUp"
      className={({ isActive }) => (isActive ? s.active : s.link)}
    >
      Sign up
    </NavLink>

    <NavLink
      to="/logIn"
      className={({ isActive }) => (isActive ? s.active : s.link)}
    >
      Log in
    </NavLink>
  </nav>
);

export default UserNav;
