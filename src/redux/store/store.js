import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slices/authSlice';
import homeReducer from '../slices/homeSlice';
import infoReducer from '../slices/infoSlice';
import postsReducer from '../slices/postsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    home: homeReducer,
    info: infoReducer,
  }
})

export default store;