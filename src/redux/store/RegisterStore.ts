import { createSlice } from '@reduxjs/toolkit';

interface RegisterState {
    loading: boolean;
    isSuccess: boolean;
    error: string | null;
}
const initialState: RegisterState = {
    loading: false,
    isSuccess: false,
    error: null,
};

const register = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart(state) {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
    },
    registerSuccess(state) {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
    },
    registerFailure(state, action) {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload;
    }
  },
});

export const { registerStart, registerSuccess, registerFailure } = register.actions;
export default register.reducer;
