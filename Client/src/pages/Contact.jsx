import React, { useState, useEffect } from 'react';


const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: 'Gmail',
      icon: '✉️',
      url: 'mailto:aanyasingh282004@gmail.com',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      description: 'Drop me an email'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/xaanyaax/',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      description: 'Connect professionally'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/xaanyaax',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      description: 'Follow my journey'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/_xaanyaax',
      color: 'from-sky-400 to-sky-600',
      hoverColor: 'hover:from-sky-500 hover:to-sky-700',
      description: 'Join the conversation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Find me across the digital universe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                  <div className={`bg-gradient-to-br ${social.color} ${social.hoverColor} p-8 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 backdrop-blur-sm border border-white/10`}>
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
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                      background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #a855f7, #ec4899, #06b6d4)',
                      backgroundClip: 'padding-box, border-box',
                      backgroundOrigin: 'padding-box, border-box',
                    }}></div>
                  </div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 100}ms`,
                          animationDuration: '1s'
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
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-lg font-light">
            Looking forward to hearing from you! 🚀
          </p>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Contact;