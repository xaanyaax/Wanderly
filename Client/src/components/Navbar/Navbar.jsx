import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isAddHovered, setIsAddHovered] = useState(false);

  const handleSignIn = () => {
    //add code here
  };

  const handleAddDestination = () => {
    // Add your destination creation logic here
    console.log("Add new destination");
  };

  return (
    <>
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-20 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20 animate-pulse"></div>
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3), transparent 50%)",
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>
      </div>

      <nav
        className="relative bg-black/90 backdrop-blur-xl border-b border-purple-500/30 px-8 py-4 flex justify-between items-center sticky top-0 z-50"
        style={{
          boxShadow:
            "0 8px 32px rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(30, 30, 60, 0.95) 50%, rgba(0, 0, 0, 0.95) 100%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Logo Container */}
        <Link to={"/"}>
          <div className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 relative z-10">
            <div className="relative">
              <span
                className="text-3xl relative z-10"
                style={{
                  animation: "rotate 20s linear infinite",
                  filter: "drop-shadow(0 0 10px rgba(120, 119, 198, 0.8))",
                }}
              >
                🌍
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent tracking-tight relative">
              Wanderly
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <ul className="flex list-none gap-8 items-center relative z-10">
          <li>
            
            <Link to={"/explore"}
              href="#"
              className="text-gray-300 font-medium px-4 py-2 rounded-lg transition-all duration-500 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group border border-transparent hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-lg"></div>
              <span className="relative">Explore 🚀</span>
            </Link>
          </li>
          {/* DESTINATION KEEP OR NOT?? */}
          <li className="flex items-center gap-2">

            {/* Cool "create" Icon Button */}
            <Link to={"/create"}>
            <button
              onClick={handleAddDestination}
              onMouseEnter={() => setIsAddHovered(true)}
              onMouseLeave={() => setIsAddHovered(false)}
              className="relative w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-400/30 transition-all duration-700 hover:scale-110 hover:-translate-y-1 group overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 15px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Plus icon with rotation animation */}
              <div
                className={`relative flex items-center justify-center w-full h-full transition-transform duration-700 ${
                  isAddHovered ? "rotate-90" : ""
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white relative z-10"
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Glowing ring on hover */}
              <div
                className={`absolute inset-0 rounded-full border-2 border-white/50 transition-all duration-700 ${
                  isAddHovered ? "scale-125 opacity-100" : "scale-100 opacity-0"
                }`}
              ></div>
            </button>
            </Link>
          </li>

          <li> 
            {/* Caution! do not nest a tag inside Link tag! */}
            <a
              href="#"
              className="text-gray-300 font-medium px-4 py-2 rounded-lg transition-all duration-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group border border-transparent hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-indigo-500/10 transition-all duration-500 rounded-lg"></div>
              <span className="relative">Profile ✨</span>
            </a>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-300 font-medium px-4 py-2 rounded-lg transition-all duration-500 hover:text-white hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-indigo-600/20 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group border border-transparent hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-lg"></div>
              <span className="relative">Contact  ☎️</span>
            </Link>
          </li>
        </ul>

        {/* Sign In Button */}
        <Link to={"/login"}>
          <button
            onClick={handleSignIn}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border border-indigo-400/30 px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group"
            style={{
              boxShadow:
                "0 4px 15px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow =
                "0 8px 25px rgba(102, 126, 234, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              e.target.style.background =
                "linear-gradient(135deg, #764ba2 0%, #667eea 50%, #f093fb 100%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow =
                "0 4px 15px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              e.target.style.background =
                "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)";
            }}
          >
            <span className="relative">Sign In</span>
          </button>
        </Link>

        {/* Animated border bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
      </nav>

      <style >{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}