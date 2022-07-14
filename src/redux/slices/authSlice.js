import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  newUser: null,
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
    },
    registeredUser(state, action) {
      state.newUser = action.payload;
      state.error = null;
    },
    registeredUserFail(state, action) {
      state.newUser = null;
      state.error = action.payload;
    }
  },
});

export const { userSignedIn, userSignInError, signOutUser, registeredUser, registeredUserFail } = authSlice.actions;

export default authSlice.reducer;