import { createSlice } from '@reduxjs/toolkit';
import Cache from '../../helper/Cache';
interface AuthState {
   token: string | null;
   loading: boolean;
   isSuccess: boolean;
   error: string | null;
}
const initialState: AuthState = {
   token: null,
   loading: false,
   isSuccess: false,
   error: null,
};
const cache = new Cache('session');
const login = createSlice({
   name: 'login',
   initialState,
   reducers: {
      loginStart(state) {
         state.loading = true;
         state.isSuccess = false;
         state.error = null;
      },
      loginSuccess(state, action) {
         console.log(action);
         state.loading = false;
         state.isSuccess = true;
         state.token = action.payload.token;
         cache.setCache('token', state.token);
      },
      loginFailure(state, action) {
         state.loading = false;
         state.isSuccess = false;
         state.error = action.payload;
      },
      setToken(state) {
         console.log('set token');
         const token = cache.getCache('token');
         console.log(token);
         if (token) {
            state.token = token;
         }
      },
      logout(state) {
         state.token = null;
      },
   },
});

export const { loginStart, loginSuccess, loginFailure, setToken, logout } =
   login.actions;
export default login.reducer;
