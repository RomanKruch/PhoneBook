import { useSelector } from 'react-redux';
import s from './Header.module.css';
import Navigation from './components/Navigation';
import UserNav from './components/UserNav';
import UserInfo from './components/UserInfo';

const Header = () => {
  const isLogged = useSelector(state => state.user.isLogged);

  return (
    <header className={s.header}>
      <Navigation />

      {isLogged ? <UserInfo /> : <UserNav />}
    </header>
  );
};

export default Header;
