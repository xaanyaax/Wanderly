import React from 'react';
import Post from './Post/Post';

export default function Posts({ posts, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map(post => (
        <Post key={post._id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}
