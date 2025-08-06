// store/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { setUserDataToStore } from './profileDataSlice';

const initialState = {
  activeItem: 'my-assets',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

// ✅ Correct thunk (no useEffect here)
export const toggleUserTypeAndSetActiveItem = () => (dispatch, getState) => {
  // Get current profileData from store
  let currentUserData = getState().profileData.userData;

  // If store is empty, try loading from localStorage
  if (!currentUserData || Object.keys(currentUserData).length === 0) {
    const saved = localStorage.getItem('profileData');
    if (saved) {
      currentUserData = JSON.parse(saved);
      dispatch(setUserDataToStore(currentUserData));
    }
  }

  const currentType = currentUserData.userType || 'user';
  const newType = currentType === 'user' ? 'creator' : 'user';

  // Only update userType, not the whole object
  const updatedUserData = { ...currentUserData, userType: newType };

  // Update localStorage
  localStorage.setItem('profileData', JSON.stringify(updatedUserData));

  // Update Redux store
  dispatch(setUserDataToStore(updatedUserData));

  // Set sidebar item
  const newActiveItem = newType === 'user' ? 'my-assets' : 'analytics';
  dispatch(setActiveItem(newActiveItem));
};

export const { setActiveItem } = dashboardSlice.actions;
export default dashboardSlice.reducer;
