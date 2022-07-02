import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  welcomeText: 'Welcome!',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeText(state, action) {
      state.welcomeText = action.payload;
    },
  },
});

export const { changeText } = homeSlice.actions;

export default homeSlice.reducer;
