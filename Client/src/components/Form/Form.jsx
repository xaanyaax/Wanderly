import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleClear = () => {
    setFormData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      file: null,
    });
    // Clear file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  };

  return (
    <>
      {/* Main form container */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-20 blur-xl"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center animate-pulse">
            ✨ Creating a Memory ✨
          </h1>

          <div className="space-y-6">
            <div className="group">
              <input
                type="text"
                name="creator"
                placeholder="Creator"
                value={formData.creator}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-pink-500/25"
              />
            </div>

            <div className="group">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-purple-500/25"
              />
            </div>

            <div className="group">
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
              />
            </div>

            <div className="group">
              <input
                type="text"
                name="tags"
                placeholder="Tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-yellow-500/25"
              />
            </div>

            <div className="group">
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-gradient-to-r file:from-pink-500 file:to-purple-500 file:text-white file:font-medium file:cursor-pointer hover:file:from-pink-600 hover:file:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-pink-500/25"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95"
            >
              🚀 SUBMIT
            </button>
          </div>

          <button
            type="button"
            onClick={handleClear}
            className="w-full mt-4 py-4 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            🗑️ CLEAR
          </button>
        </div>
      </div>
    </>
  );
}
