import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './SignUp.module.css';
import { onSignUp } from '../../redux/user/userOperations';
import {
  Button,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    dispatch(onSignUp(user));
  };

  return (
    <>
      <h1 className={s.title}>Sign Up</h1>
      <form className={s.form} onSubmit={onSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          required
        />

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

        <Button variant="outlined" type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
