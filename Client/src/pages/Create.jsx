import React, { useState } from 'react';
import axios from "axios";

export default function Create() {

  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submission
  
    setIsSubmitting(true);
  
    const data = new FormData();
    data.append("title", formData.title);
    data.append("message", formData.message);
    data.append("tags", formData.tags);
    data.append("selectedFile", formData.file);
  
    try {
      const res = await axios.post("http://localhost:8080/api/posts/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Post created:", res.data);
      alert("Post created successfully!");
      handleClear();
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Failed to create post.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleClear = () => {
    setFormData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      file: null
    });

    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  };



  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-px h-28 bg-gradient-to-b from-pink-500 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Moving Diagonal Lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 animate-pulse" style={{transform: 'rotate(-15deg)', animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse" style={{transform: 'rotate(15deg)', animationDelay: '1.5s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-20 w-8 h-8 border border-purple-500 opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 border border-blue-400 opacity-25 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-pink-500 opacity-20 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-32 w-5 h-5 bg-cyan-400 opacity-25 transform rotate-45 animate-bounce"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-40 left-1/3" style={{animation: 'float 6s ease-in-out infinite'}}>
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-purple-500 opacity-20"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4" style={{animation: 'float 8s ease-in-out infinite reverse'}}>
          <div className="w-0 h-0 border-l-5 border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-blue-400 opacity-15"></div>
        </div>
        
        {/* Hexagons */}
        <div className="absolute top-1/3 right-1/2 w-6 h-6 opacity-20" style={{animation: 'float 10s ease-in-out infinite'}}>
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        </div>
        
        {/* Dynamic Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{animation: 'pulse 4s ease-in-out infinite'}}>
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#gradient1)" strokeWidth="1"/>
          <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="url(#gradient2)" strokeWidth="1"/>
          <line x1="20%" y1="70%" x2="60%" y2="80%" stroke="url(#gradient3)" strokeWidth="1"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#06b6d4"/>
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(168, 85, 247, 0.5),
                         0 0 20px rgba(168, 85, 247, 0.3),
                         0 0 30px rgba(168, 85, 247, 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(168, 85, 247, 0.8),
                         0 0 30px rgba(168, 85, 247, 0.6),
                         0 0 40px rgba(168, 85, 247, 0.4),
                         0 0 50px rgba(168, 85, 247, 0.2);
          }
        }
      `}</style>



      {/* Main Form Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 h-12 flex items-center justify-center" style={{animation: 'glow 2s ease-in-out infinite'}}>
              Create a Memory ✨
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Title Field */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 transition-colors group-focus-within:text-purple-400">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/90"
                placeholder="Enter memory title"
              />
            </div>

            {/* Message Field */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 transition-colors group-focus-within:text-purple-400">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/90 resize-none"
                placeholder="Share your memory..."
              ></textarea>
            </div>

            {/* Tags Field */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 transition-colors group-focus-within:text-purple-400">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/90"
                placeholder="Enter tags (comma separated)"
              />
            </div>

            {/* File Upload */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 transition-colors group-focus-within:text-purple-400">
                Choose File
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-600 file:text-white hover:file:bg-purple-700 file:cursor-pointer cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/90"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Share 💝
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Clear 🗑️
              </button>
            </div>
          </div>
        </div>

        {/* Subtle glow effect around the form */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
      </div>
    </div>
  );
}