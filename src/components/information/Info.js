import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import PostList from '../posts/PostList';
import * as API from '../../api/posts'
import { auth } from '../../app/app';
import { changeText } from '../../redux/slices/infoSlice';
import { postCreated, loadPosts } from '../../redux/slices/postsSlice';

const Info = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    const unsubscribeFromPostChanges = API.subscribeToPostUpdates(
      snapshot => loadPosts(snapshot));

    return unsubscribeFromPostChanges();
  }, [])

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

const mapStateToProps = state => ({
  infoText: state.info.infoText,
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  changeText: text => dispatch(changeText(text)),
  createPost: post => dispatch(postCreated(post)),
  loadPosts: () => dispatch(loadPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Info);