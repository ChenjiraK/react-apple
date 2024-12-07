// store/authActions.ts
import { Dispatch } from '@reduxjs/toolkit';
import { loginStart, loginSuccess, loginFailure, logout } from '../store/AuthStore';
import { apiLogin } from '../../services/api/login.api';
import { ILogin } from '@/types/ILogin';

// ตัวอย่าง: Action สำหรับ Login
export const login = (params: ILogin) => async (dispatch: Dispatch) => {
  dispatch(loginStart());
  try {
    const response = await apiLogin(params);
    dispatch(loginSuccess(response));
  } catch (error: any) {
    dispatch(loginFailure(error.message || 'Login failed'));
  }
};

// ตัวอย่าง: Action สำหรับ Logout
export const performLogout = () => (dispatch: Dispatch) => {
  // ล้างข้อมูลใน State
  dispatch(logout());
};
