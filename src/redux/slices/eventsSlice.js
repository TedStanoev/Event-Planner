import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  publicEvents: [],
  error: null,
};

const eventsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getEvents(state, action) {
      state.publicEvents = action.payload;
      state.error = null;
    },
    getEventsFail(state, action) {
      state.publicEvents = [];
      state.error = action.payload;
    },
  },
});

export const { getEvents, getEventsFail } = eventsSlice.actions;

export default eventsSlice.reducer;