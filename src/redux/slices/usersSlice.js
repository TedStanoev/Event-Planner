import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: null,
  error: null,
  filteredUsers: null,
  editUser: null,
  editError: null,
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
    },
    editUser(state, action) {
      state.editUser = action.payload;
      state.editError = null;
    },
    editUserFail(state, action) {
      state.editUser = null;
      state.editError = action.payload;
    }
  },
});

export const { fetchedUsers, fetchedUsersFail, clearUsers, filterUsers, editUser, editUserFail } = usersSlice.actions;

export default usersSlice.reducer;