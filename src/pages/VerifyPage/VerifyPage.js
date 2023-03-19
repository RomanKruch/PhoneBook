import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onVerify } from '../../redux/user/userOperations';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import s from './VerifyPage.module.css';

const VerifyPage = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let intervalID = null;

    if (!isAvailable) {
      dispatch(onVerify());
      intervalID = setInterval(() => {
        dispatch(onVerify());
      }, 5000);
    }
    const timeoutId = setTimeout(() => {
      setIsAvailable(true);
      clearInterval(intervalID);
    }, 30000);

    return () => {
      clearInterval(intervalID);
      clearTimeout(timeoutId);
    };
  }, [isAvailable, dispatch]);

  return (
    <div className={s.verifyPage}>
      <h1>Please verify your account)</h1>
      <p>Verification list was sent on your email</p>
      {!isAvailable ? (
        <CircularProgress />
      ) : (
        <Button
          variant="outlined"
          onClick={() => setIsAvailable(false)}
          type="button"
        >
          Try again
        </Button>
      )}
    </div>
  );
};

export default VerifyPage;
