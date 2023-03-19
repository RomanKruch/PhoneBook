import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={s.title}>
        For using phoneBook, you need
        <Link to="/signUp">sing up</Link>
        or
        <Link to="/logIn">log in</Link>
      </h1>
    </>
  );
};

export default Home;
