import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSignedIn(state, action) {
      state.user = action.payload;
      state.error = null;
    },
    userSignInError(state, action) {
      state.user = null;
      state.error = action.payload;
    },
    signOutUser(state, action) {
      state.user = null;
      state.error = null;
    }
  },
});

export const { userSignedIn, userSignInError, signOutUser } = authSlice.actions;

export default authSlice.reducer;