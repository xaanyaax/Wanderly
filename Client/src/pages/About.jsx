import React from 'react';
// import images from '../assets/images';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
      {/* Animated Rose Petals Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-4 h-4 bg-rose-300 rounded-full opacity-30 transform rotate-45"></div>
          </div>
        ))}
      </div>

      {/* Floating Rose Decorations */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-40"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-rose-500 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4 animate-pulse">
            About Me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Profile Picture Section */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* Decorative Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 rounded-full animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full animate-pulse opacity-60"></div>
            
            {/* Profile Picture Placeholder */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full shadow-2xl overflow-hidden group-hover:shadow-rose-300/50 transition-all duration-300 transform group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
              <div className="flex items-center justify-center h-full">
                <img src="" alt="" />
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200/50 hover:shadow-rose-200/50 transition-all duration-300 transform hover:-translate-y-2">
            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-rose-400 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-rose-400 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-rose-400 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-rose-400 rounded-br-lg"></div>
            
            <div className="relative z-10">
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p className="text-lg md:text-xl font-light">
                  <span className="text-2xl text-rose-600 font-serif">"</span>
                  Welcome to my world! I'm passionate about creating beautiful experiences and sharing my journey with others.
                  <span className="text-2xl text-rose-600 font-serif">"</span>
                </p>
                
                <div className="space-y-4 text-base md:text-lg">
                  <p className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  
                  <p className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  
                  <p className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}