import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/post-services';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
