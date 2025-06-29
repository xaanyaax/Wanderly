import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "../components/Posts/Posts.jsx"; // ✅ Your reusable component

export default function Explore() {
  const [posts, setPosts] = useState([]); // ✅ Add posts state
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "Wander. Capture. Repeat.";

  // ✅ Fetch posts from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts/fetch")
      .then((res) => setPosts(res.data.reverse()))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length && !isComplete) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        if (currentIndex + 1 === fullText.length) {
          setIsComplete(true);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText, isComplete]);

  // ✅ Optional: handle delete
  const handlePostDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post._id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* ... existing animated elements ... */}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-20 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4">
            {displayText}
            {!isComplete && <span className="animate-pulse text-purple-400">|</span>}
          </h1>
        </div>

        <div className="w-full max-w-4xl mx-auto mb-8">
          {/* Search bar */}
          {/* ... your search bar code remains same ... */}

          {/* 🔥 Posts Section */}
          <div className="flex flex-col gap-10">
            <Posts posts={posts} onPostDeleted={handlePostDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
