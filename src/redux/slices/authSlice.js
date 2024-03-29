import { createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';

import { app } from '../../config/app';

const initialState = {
  user: getAuth(app).currentUser,
  userImage: null,
  loginError: null,
  registerError: null,
  logoutError: null,
  newUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSignedIn(state, action) {
      console.log('Payload', action.payload)
      state.user = action.payload;
      state.userImage = action.payload.userImage;
      state.loginError = null;
    },
    userSignInError(state, action) {
      state.user = null;
      state.userImage = null;
      state.loginError = action.payload;
    },
    signOutUser(state, action) {
      state.user = null;
      state.logoutError = null;
      state.userImage = null;
      state.loginError = null;
      state.registerError = null;
    },
    registeredUser(state, action) {
      state.newUser = action.payload;
      state.registerError = null;
    },
    registeredUserFail(state, action) {
      state.newUser = null;
      state.registerError = action.payload;
    }
  },
});

export const { userSignedIn, userSignInError, signOutUser, registeredUser, registeredUserFail } = authSlice.actions;

export default authSlice.reducer;