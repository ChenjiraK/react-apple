import { Dispatch } from '@reduxjs/toolkit';
import {
   loginStart,
   loginSuccess,
   loginFailure,
   logout,
} from '../store/LoginStore';
import {
   registerStart,
   registerSuccess,
   registerFailure,
} from '../store/RegisterStore';
import { apiLogin, apiRegister } from '../../services/api/auth.api';
import { ILogin, IRegister } from '@/types/IAuth';
import { toast } from 'react-toastify';

export const login = (params: ILogin) => async (dispatch: Dispatch) => {
   dispatch(loginStart());
   try {
      const response = await apiLogin(params);
      dispatch(loginSuccess(response));
   } catch (error: any) {
      dispatch(loginFailure(error.message || 'Login failed'));
      toast.error(error.message || 'Login failed');
   }
};

export const register = (params: IRegister) => async (dispatch: Dispatch) => {
   dispatch(registerStart());
   try {
      await apiRegister(params);
      dispatch(registerSuccess());
   } catch (error: any) {
      dispatch(registerFailure(error.message || 'register failed'));
   }
};

export const performLogout = () => (dispatch: Dispatch) => {
   // ล้างข้อมูลใน State
   dispatch(logout());
};
