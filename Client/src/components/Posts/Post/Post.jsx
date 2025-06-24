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

  const handleDelete = () => {  //TO DO
    if (window.confirm('Are you sure you want to delete this post?')) {
      alert('Post deleted!');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden m-4 border border-gray-100 hover:scale-105">
      {/* Image with author overlay */}
      <div className="relative">
        <img 
        // ADD URL HERE
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Beautiful mountain landscape" 
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-40 backdrop-blur-sm text-white px-4 py-3 rounded-xl border border-white border-opacity-20 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
              SJ   
              {/* ADD PROP HERE */}
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide">Sarah Johnson</p>
              <p className="text-xs opacity-90 font-medium">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        {/* Hashtags */}
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 text-white text-xs px-3 py-1.5 rounded-full mr-2 mb-2 shadow-md hover:shadow-lg transition-shadow">#mountains</span>
          <span className="inline-block bg-gradient-to-r from-green-400 to-green-500 text-white text-xs px-3 py-1.5 rounded-full mr-2 mb-2 shadow-md hover:shadow-lg transition-shadow">#nature</span>
          <span className="inline-block bg-gradient-to-r from-purple-400 to-purple-500 text-white text-xs px-3 py-1.5 rounded-full mr-2 mb-2 shadow-md hover:shadow-lg transition-shadow">#adventure</span>
          <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full mr-2 mb-2 shadow-md hover:shadow-lg transition-shadow">#travel</span>
        </div>

        {/* Description ADD DESCRIPTION PROP HERE */}
        <p className="text-gray-700 text-sm mb-6 leading-relaxed font-medium">
          Just witnessed the most breathtaking sunrise over the Rocky Mountains! The golden light cascading over the peaks was absolutely magical. This hidden gem is definitely worth the early morning hike. Nature never fails to amaze me! 🏔️✨
        </p>

        {/* Like and Delete buttons */}
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
              isLiked 
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-red-200' 
                : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 shadow-gray-200'
            }`}
          >
            <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
            <span className="text-sm font-bold">{likes}</span>
          </button>
          
          <button 
            onClick={handleDelete}
            className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-red-100 to-red-200 text-red-600 rounded-xl hover:from-red-200 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-200"
          >
            <span className="text-sm">🗑️</span>
            <span className="text-sm font-bold">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}