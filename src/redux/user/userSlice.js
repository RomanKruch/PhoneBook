import { createSlice } from '@reduxjs/toolkit';
import { onSignUp, onLogin, onLogout, onRefresh, onVerify } from './userOperations';

const initialState = {
  userInfo: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  isRefreshing: false,
  isLogged: false,
  isVerifying: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [onSignUp.pending]: state => ({
      ...state,
      isLoading: true,
    }),

    [onSignUp.fulfilled]: (_, { payload }) => ({
      ...initialState,
      userInfo: {
        name: payload.user.name,
        email: payload.user.email,
      },
      // token: payload.token,
      isVerifying: true,
    }),

    [onSignUp.rejected]: state => ({
      ...state,
      isLoading: false,
    }),

    [onLogin.pending]: state => ({
      ...state,
      isLoading: true,
    }),

    [onLogin.fulfilled]: (_, { payload }) => ({
      ...initialState,
      userInfo: {
        name: payload.name,
      },
      token: payload.token,
      isLogged: true,
    }),

    [onLogin.rejected]: state => ({
      ...state,
      isLoading: false,
    }),

    [onLogout.fulfilled]: _ => ({
      ...initialState,
    }),

    [onRefresh.pending]: state => ({
      ...state,
      isRefreshing: true,
    }),

    [onRefresh.fulfilled]: (_, { payload }) => ({
      ...initialState,
      userInfo: payload.userInfo,
      token: payload.token,
      isLogged: true,
      isRefreshing: false,
    }),

    [onRefresh.rejected]: state => ({
      ...state,
      isRefreshing: false,
    }),
    [onVerify.fulfilled]: (state, { payload }) => ({
      ...state,
      token: payload,
      isLogged: true,
      isVerifying: false
    }),
  },
});

export default userSlice.reducer;
