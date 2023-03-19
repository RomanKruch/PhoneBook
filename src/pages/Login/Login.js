import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from '../../redux/user/userOperations';
import {
  Button,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import s from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.user.isLoading);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(onLogin(user));
  };

  return (
    <>
      <h1 className={s.title}>Login</h1>
      <form className={s.form} onSubmit={onSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />

        <FormControl>
          <InputLabel>Password *</InputLabel>
          <OutlinedInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
        </FormControl>

        <Button variant="outlined" type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
