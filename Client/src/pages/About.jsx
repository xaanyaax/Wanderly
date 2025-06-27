import { useState, useEffect } from 'react';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      title: "Explore the World Through Others' Eyes",
      description: "A vibrant platform where users share the places they've visited with stunning photos and vivid stories.",
      emoji: "🌍",
      bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Visual Storytelling",
      description: "Upload pictures and albums of your travels, hidden gems, or favorite hangout spots — from exotic getaways to cozy cafes.",
      emoji: "📸",
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Share Your Experience",
      description: "Add personal captions, travel tips, and local insights to your posts, making every upload more than just a picture.",
      emoji: "📝",
      bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Like, Comment & Connect",
      description: "Show appreciation with a like, or spark conversations through comments. Interact with fellow explorers and build meaningful connections.",
      emoji: "💬",
      bgImage: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Discover Hidden Treasures",
      description: "Browse posts by location, category, or hashtags to uncover places you never knew existed.",
      emoji: "🔍",
      bgImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Travel Wishlist & Itineraries",
      description: "Save posts to a travel wishlist or create custom itineraries inspired by other users' experiences.",
      emoji: "💡",
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-8xl font-bold mb-8 tracking-wide">
            Wanderly{' '}
            <span 
              className="inline-block animate-spin" 
              style={{ animationDuration: '10s' }}
            >
              🌍
            </span>
          </h1>
          <p className="text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            Discover the world through the eyes of fellow travelers
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-1 h-16 bg-white rounded-full opacity-60" />
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      {sections.map((section, index) => (
        <div key={index} className="relative h-screen flex items-center">
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('${section.bgImage}')`,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 w-full px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div 
                  className="space-y-8 transform transition-all duration-1000"
                  style={{
                    transform: `translateX(${Math.max(0, 100 - (scrollY / (index * 800 + 400)) * 100)}px)`,
                    opacity: Math.min(1, Math.max(0, (scrollY / (index * 800 + 200)) - 0.5))
                  }}
                >
                  <div className="text-8xl mb-6">
                    {section.emoji}
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                  <p className="text-xl lg:text-2xl text-white leading-relaxed">
                    {section.description}
                  </p>
                  <div className="inline-block">
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  </div>
                </div>
                
                {/* Interactive Card */}
                <div 
                  className="hidden lg:block transform transition-all duration-1000 hover:scale-105"
                  style={{
                    transform: `translateX(${Math.max(0, -100 + (scrollY / (index * 800 + 400)) * 100)}px) scale(${0.8 + Math.min(0.2, Math.max(0, (scrollY / (index * 800 + 200)) - 0.5))})`,
                    opacity: Math.min(1, Math.max(0, (scrollY / (index * 800 + 200)) - 0.3))
                  }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 border border-gray-700 group-hover:border-gray-500 transition-all duration-300">
                      <div className="text-4xl mb-4">{section.emoji}</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        {section.title}
                      </h3>
                      <p className="text-white leading-relaxed">
                        {section.description}
                      </p>
                      <div className="mt-6 flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span>Learn more</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Final CTA Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of travelers sharing their adventures and discovering new destinations every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;