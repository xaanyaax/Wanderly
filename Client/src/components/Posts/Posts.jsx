
import React from 'react';
import Post from './Post/Post.jsx';

export default function Posts({ posts, onPostDeleted }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts.map((post) => (
        <Post key={post._id} post={post} onPostDeleted={onPostDeleted} />
      ))}
    </div>
  );
}
