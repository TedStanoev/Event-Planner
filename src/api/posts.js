import { ref, set, get, child, onValue } from 'firebase/database';

import { db } from "../config/app";

const postsPath = 'posts/';
const lastPostIdPath = 'posts/lastPostId';
const allPostsPath = 'posts/all';
const dbRef = ref(db);

export const createNewPost = async postContent => {
  const lastPostId = await getLastPostId();

  if (!lastPostId) {
    console.log('Cant get last post');
  }

  console.log(lastPostId);

  const newPostId = lastPostId + 1;

  await setLastPostId(newPostId);

  await set(ref(db, allPostsPath), {[newPostId]: postContent});
}

export const subscribeToPostUpdates = (onChangeHandler) => {
  const postsRef = ref(db, allPostsPath);

  return onValue(postsRef, onChangeHandler)
}

export const getLastPostId = async () => 
  get(child(dbRef, lastPostIdPath))
    .then(snapshot => snapshot ? snapshot.val() : null);

const setLastPostId = async newPostId => 
  set(ref(db, lastPostIdPath), newPostId);