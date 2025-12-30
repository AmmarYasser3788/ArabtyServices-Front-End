'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../core/store';
import { loginStart, loginSuccess, loginFailure, logout } from '../authSlice';
import { loginAPI } from '../services/authService';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    try {
      dispatch(loginStart());
      const data = await loginAPI(email, password);
      dispatch(loginSuccess({ user: data.user, token: data.token }));
    } catch (error: any) {
      dispatch(loginFailure(error.response?.data?.message || error.message));
    }
  };

  const logoutUser = () => dispatch(logout());

  return { auth, login, logoutUser };
};
