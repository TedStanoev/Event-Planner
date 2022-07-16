import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: null,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchedUsers(state, action) {
      state.users = action.payload;
      state.error = null;
    },
    fetchedUsersFail(state, action) {
      state.users = null;
      state.error = action.payload;
    },
    clearUsers(state, action) {
      state.users = null;
      state.error = null;
    }
  },
});

export const { fetchedUsers, fetchedUsersFail, clearUsers } = usersSlice.actions;

export default usersSlice.reducer;