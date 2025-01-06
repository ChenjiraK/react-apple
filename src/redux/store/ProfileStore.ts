import { createSlice } from '@reduxjs/toolkit';
import { IProfile } from '@/types/IAuth';
import { ProfileModel } from '../../model/ProfileModel';

interface ProfileState {
   data: IProfile | null
   loading: boolean;
   isSuccess: boolean;
   error: string | null;
}
const initialState: ProfileState = {
   data: null,
   loading: false,
   isSuccess: false,
   error: null,
};
const profile = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      profileStart(state) {
         state.loading = true;
         state.isSuccess = false;
         state.error = null;
      },
      profileSuccess(state, action) {
         state.loading = false;
         state.isSuccess = true;
         state.data = new ProfileModel(action.payload.user).getRawData();
      },
      profileFailure(state, action) {
         state.loading = false;
         state.isSuccess = false;
         state.error = action.payload;
      },
   },
});

export const { profileStart, profileSuccess, profileFailure } = profile.actions;
export default profile.reducer;
