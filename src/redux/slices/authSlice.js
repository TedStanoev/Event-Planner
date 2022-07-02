import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSignedIn(state, action) {
      state.user = action.payload;
    },
  },
});

export const { userSignedIn } = authSlice.actions;

export default authSlice.reducer;