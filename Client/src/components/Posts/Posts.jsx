import React from 'react';
import Post from './Post/Post.jsx';

export default function Posts({ posts, onPostDeleted }) {
  return (
    <div className="flex flex-col gap-6 p-4">
      {posts.map((post) => (
        <Post key={post._id} post={post} onPostDeleted={onPostDeleted} />
      ))}
    </div>
  );
}
