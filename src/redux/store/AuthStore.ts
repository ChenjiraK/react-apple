import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user?: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}
const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = auth.actions;
export default auth.reducer;
