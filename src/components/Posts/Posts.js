import React from 'react';

const Posts = () => {
  return (
    <div>
      <h2>Create Post</h2>
      <form>
        <input type="text" placeholder="Post Content" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Posts;
