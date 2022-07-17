import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slices/authSlice';
import homeReducer from '../slices/homeSlice';
import usersReducer from '../slices/usersSlice';
import eventsReducer from '../slices/eventsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    users: usersReducer,
    events: eventsReducer,
  }
})

export default store;