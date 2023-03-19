import s from './Error.module.css';

const Error = () => {
  return (
    <div className={s.wrap}>
      <div className={s.error}>404 Page not found</div>
    </div>
  );
};

export default Error;
