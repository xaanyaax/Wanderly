import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleSignIn = () => {
    //add code here
    
  };

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-white/20 px-8 py-4 flex justify-between items-center sticky top-0 z-50" style={{ boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)' }}>
      {/* Logo Container */}
      <Link to={"/"}>
      <div className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105">
        <span className="text-3xl" style={{
          animation: 'rotate 20s linear infinite'
        }}>🌍</span>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
          Wanderly
        </span>
      </div>
      </Link>

      {/* Navigation Menu - Always visible */}
      <ul className="flex list-none gap-8 items-center">
        <li>
          <a 
            href="#" 
            className="text-gray-600 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-indigo-500 hover:bg-indigo-50 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            Explore
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="text-gray-600 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-indigo-500 hover:bg-indigo-50 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            Destinations
          </a>
        </li>
        <li>
          <Link to={'/about'}>
          <a 
            href="#" 
            className="text-gray-600 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-indigo-500 hover:bg-indigo-50 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            About
          </a>
          </Link>
        </li>
        <li>
          <Link to={'/contact'}>
          <a 
            href="#" 
            className="text-gray-600 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-indigo-500 hover:bg-indigo-50 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            Contact
          </a>
          </Link>
        </li>
      </ul>

      {/* Sign In Button */}
      <Link to={'/login'}>
      <button 
        onClick={handleSignIn}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group"
        style={{ boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)' }}
        onMouseEnter={(e) => e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)'}
        onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
        <span className="relative">Sign In</span>
      </button>
      </Link>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </nav>
  );
}

