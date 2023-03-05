import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import PostList from '../posts/PostList';
import * as API from '../../api/posts'
import { auth } from '../../config/app';

const Info = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [postContent, setPostContent] = useState('');

  // useEffect(() => {
  //   const unsubscribeFromPostChanges = API.subscribeToPostUpdates(
  //     snapshot => loadPosts(snapshot));

  //   return unsubscribeFromPostChanges();
  // }, [])

  const handleTextChange = () => {
    props.changeText(inputValue);
  }

  const handleCreatePost = async () => {
    if (!postContent) return;

    await API.createNewPost(postContent);

    props.createPost(postContent);
  }

  return (
    <PostList posts={props.posts}/>
  )
}

export default connect()(Info);