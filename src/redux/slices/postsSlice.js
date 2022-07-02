import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts(state, action) {
      state.posts = action.payload;
    },
    postCreated(state, action) {
      state.posts.push(action.payload);
    },
  },
});

export const { postCreated, loadPosts } = postsSlice.actions;

export default postsSlice.reducer;