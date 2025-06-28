import { useState, useEffect } from "react";
// import Post1 from "../components/Posts/Post/Post1.jsx";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "Wander. Capture. Repeat.";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-20 px-4">
        {/* Header */}
        <div className="text-center mb-12 transform transition-all duration-1000 ease-out">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4">
            {displayText}
            {!isComplete && (
              <span className="animate-pulse text-purple-400">|</span>
            )}
          </h1>
        </div>

        <div className="w-full max-w-4xl mx-auto mb-8">
          {/* Search Bar */}
          <div
            className={`relative transform transition-all duration-500 ease-out ${
              isFocused ? "scale-105" : "scale-100"
            } mb-6`} // ← Added margin bottom here
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl transition-all duration-300 ${
                isFocused ? "opacity-75 blur-sm" : "opacity-50 blur-md"
              }`}
            ></div>

            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-4">
                  <svg
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isFocused ? "text-purple-400" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search"
                  className="w-full py-4 pr-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="flex-shrink-0 p-4 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="flex flex-col gap-10">
            {/* add posts here */}
          </div>
        </div>
      </div>
    </div>
  );
}
