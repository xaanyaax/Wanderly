import React, { useState, useEffect } from "react";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "Gmail",
      icon: "✉️",
      url: "mailto:aanyasingh282004@gmail.com",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      description: "Drop me an email",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/xaanyaax/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      description: "Connect professionally",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/xaanyaax",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      description: "Follow my journey",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/_xaanyaax",
      color: "from-sky-400 to-sky-600",
      hoverColor: "hover:from-sky-500 hover:to-sky-700",
      description: "Join the conversation",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes rotateGlobe {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-globe {
          animation: rotateGlobe 4s linear infinite;
          display: inline-block;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes drift {
          0% {
            transform: translateX(-100px) translateY(0px);
          }
          50% {
            transform: translateX(100px) translateY(-50px);
          }
          100% {
            transform: translateX(-100px) translateY(0px);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
          75% {
            transform: scale(1.1) rotate(270deg);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-drift {
          animation: drift 15s linear infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          background: linear-gradient(-45deg, #8B5CF6, #EC4899, #06B6D4, #10B981);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
      `}</style>

      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animate-gradient opacity-10"></div>
        
        {/* Enhanced Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-purple-400/50 rotate-45 animate-drift"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-cyan-400/50 rounded-full animate-drift" style={{animationDelay: '3s', animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-6 h-6 bg-pink-400/30 rotate-45 animate-drift" style={{animationDelay: '5s', animationDuration: '18s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-indigo-400/50 animate-wave"></div>
        
        {/* Sparkling Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Mouse Follower Effect - Enhanced */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out animate-pulse"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(1)",
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
        }}
      ></div>
      
      {/* Secondary mouse follower for trail effect */}
      <div
        className="fixed w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full pointer-events-none z-40 mix-blend-screen transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: "scale(0.8)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse flex items-center justify-center gap-4">
            Let's Connect! 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Find me across the digital universe
          </p>
         <br />
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative">
                  {/* Card Background */}
                  <div
                    className={`bg-gradient-to-br ${social.color} ${social.hoverColor} p-8 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 backdrop-blur-sm border border-white/10 relative overflow-hidden`}
                  >
                    {/* Card Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 animate-pulse"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {social.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {social.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {social.description}
                      </p>
                    </div>

                    {/* Animated Border */}
                    <div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #a855f7, #ec4899, #06b6d4)",
                        backgroundClip: "padding-box, border-box",
                        backgroundOrigin: "padding-box, border-box",
                      }}
                    ></div>
                  </div>

                  {/* Enhanced Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 100}ms`,
                          animationDuration: "1.5s",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 text-lg font-light">
            Looking forward to hearing from you! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;