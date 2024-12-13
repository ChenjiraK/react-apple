import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
   token: string | null;
   loading: boolean;
   error: string | null;
}
const initialState: AuthState = {
   token: null,
   loading: false,
   error: null,
};

const login = createSlice({
   name: 'login',
   initialState,
   reducers: {
      loginStart(state) {
         state.loading = true;
         state.error = null;
      },
      loginSuccess(state, action) {
         state.loading = false;
         state.token = action.payload.token;
      },
      loginFailure(state, action) {
         state.loading = false;
         state.error = action.payload;
      },
      logout(state) {
         state.token = null;
      },
   },
});

export const { loginStart, loginSuccess, loginFailure, logout } = login.actions;
export default login.reducer;
