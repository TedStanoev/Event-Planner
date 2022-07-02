import React from 'react';

import Post from './Post';

const PostList = props => {
  const renderPosts = () => {
    const { posts } = props;

    if (!posts) {
      return <h3>No posts</h3>
    }

    return posts.map(post => (<Post post={post} />))
  }
  
  return (
    <ul>
      {renderPosts()}
    </ul>
  )
}

export default PostList;