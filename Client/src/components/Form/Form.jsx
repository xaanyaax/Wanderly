import { useState } from "react";
import axios from "axios";

export default function Form({ onPostCreated }) {
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

  // Helper: Convert image file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let base64File = "";
    if (formData.file) {
      base64File = await convertToBase64(formData.file);
    }

    const postData = {
      ...formData,
      selectedFile: base64File, // The backend expects this field
    };

    try {
      const res = await axios.post("http://localhost:8080/posts", postData);
      onPostCreated(res.data); // Notify parent component
      handleClear(); // Reset form
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  const handleClear = () => {
    setFormData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      file: null,
    });

    // Clear the actual file input field visually
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  };

  return (
    <>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-20 blur-xl"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center animate-pulse">
            ✨ Creating a Memory ✨
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {["creator", "title", "message", "tags"].map((field) => (
                <div key={field} className="group">
                  <input
                    type="text"
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                  />
                </div>
              ))}

              <div className="group">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-gradient-to-r file:from-pink-500 file:to-purple-500 file:text-white file:font-medium file:cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                🚀 SUBMIT
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="w-full mt-4 py-4 px-6 bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20"
              >
                🗑️ CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
