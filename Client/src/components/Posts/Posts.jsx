import React from 'react';
import Post from './Post/Post';

export default function Posts({ posts, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}