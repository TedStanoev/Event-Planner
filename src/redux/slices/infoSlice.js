import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoText: 'Get to know this page'
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    changeText(state, action) {
      state.infoText = action.payload;
    },
  },
});

export const { changeText } = infoSlice.actions;

export default infoSlice.reducer;
