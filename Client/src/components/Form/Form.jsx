import React, { useState, useEffect } from 'react';

export default function Form({ currentId, setCurrentId, postToEdit, onSubmit }) {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });

  useEffect(() => {
    if (postToEdit) setPostData(postToEdit);
  }, [postToEdit]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedPost = {
      ...postData,
      tags: postData.tags.split(',').map(tag => tag.trim()) // convert string to array
    };
    onSubmit(processedPost);
    clear();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPostData({ ...postData, selectedFile: reader.result });
      };
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        {currentId ? 'Edit Post' : 'Create a New Post'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Message"
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          rows="4"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div>
          <label className="text-sm text-gray-600 mb-1 block">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={clear}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-200"
        >
          Clear
        </button>
      </form>
    </div>
  );
}
