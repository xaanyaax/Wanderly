import React, { useState } from 'react';

export default function Post() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      alert('Post deleted!');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden m-3 hover:scale-105">
      {/* Image with author overlay */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Mountain landscape" 
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
              SJ
            </div>
            <div>
              <p className="text-xs font-semibold">Sarah Johnson</p>
              <p className="text-xs opacity-80">2h ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Hashtags */}
        <div className="mb-3 flex flex-wrap gap-1">
          {['#mountains', '#nature', '#adventure', '#travel'].map((tag, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Breathtaking sunrise over the Rocky Mountains! The golden light was absolutely magical. 🏔️✨
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{isLiked ? '❤️' : '🤍'}</span>
            <span className="text-sm font-medium">{likes}</span>
          </button>
          
          <button 
            onClick={handleDelete}
            className="flex items-center space-x-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
          >
            <span className="text-sm">🗑️</span>
            <span className="text-sm font-medium">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}