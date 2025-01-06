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
import {
   profileStart,
   profileSuccess,
   profileFailure,
} from '../store/ProfileStore'
import { apiLogin, apiRegister } from '../../services/api/auth.api';
import { ILogin, IRegister } from '@/types/IAuth';
import { toast } from 'react-toastify';
import { apiGetProfile } from '../../services/api/profile.api';

export const login = (params: ILogin) => async (dispatch: Dispatch) => {
   dispatch(loginStart());
   try {
      const response = await apiLogin(params);
      dispatch(loginSuccess(response?.data));
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
      toast.error(error.message || 'Register failed');
   }
};

export const getProfile = () => async (dispatch: Dispatch) => {
   dispatch(profileStart());
   try {
      const response = await apiGetProfile();
      dispatch(profileSuccess(response?.data));
   } catch (error: any) {
      dispatch(profileFailure(error.message || 'get profile failed'));
      toast.error(error.message || 'get profile failed');
   }
}
