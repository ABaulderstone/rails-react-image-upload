import React from 'react';

const Post = ({ post }) => {
  const { title, content, image } = post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={image.url} alt='title' />
    </div>
  );
};

export default Post;
