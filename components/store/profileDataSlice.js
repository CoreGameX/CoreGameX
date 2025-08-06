import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

const profileDataSlice = createSlice({
  name: 'profileData',
  initialState,
  reducers: {
    setUserDataToStore: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    resetUserData: (state) => {
      state.userData = {};
    }
  },
});

export const { setUserDataToStore, resetUserData } = profileDataSlice.actions;
export default profileDataSlice.reducer;
