import { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState({
    profilePicture: null,
    coverPhoto: null,
    username: 'johndoe',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    joinedDate: 'March 2023',
    bio: 'Full-stack developer passionate about creating amazing user experiences. Love working with React, Node.js, and exploring new technologies.'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [editData, setEditData] = useState({ ...user });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isEditing) {
          setEditData({ ...editData, [imageType]: e.target.result });
        } else {
          setUser({ ...user, [imageType]: e.target.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setEditData({ ...user });
    setIsEditing(true);
    setShowSettings(false);
  };

  const handleSave = () => {
    setUser({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...user });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleSettingsAction = (action) => {
    switch (action) {
      case 'logout':
        alert('Logging out...');
        break;
      case 'reset':
        alert('Password reset email sent!');
        break;
      case 'delete':
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
          alert('Account deleted.');
        }
        break;
    }
    setShowSettings(false);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-sm opacity-30"></div>
            ))}
          </div>
        </div>
        
        {/* Shooting stars */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-shooting-star"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-shooting-star-delayed"></div>
      </div>

      {/* Enhanced Dynamic cursor glow */}
      <div 
        className="absolute pointer-events-none z-0"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.2s ease-out',
          filter: 'blur(20px)'
        }}
      ></div>

      <div className="relative z-10 max-w-2xl mx-auto p-4">
        {/* Main Profile Card with enhanced styling */}
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-visible mb-6 border border-gray-800/50 hover:bg-gray-900/90 transition-all duration-700 hover:shadow-purple-500/30 hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/30 group">
          {/* Enhanced Header Gradient */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-cyan-500/90 animate-gradient-shift"></div>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
              <div className="absolute top-6 left-1/2 w-1 h-1 bg-white/80 rounded-full animate-twinkle"></div>
              <div className="absolute bottom-4 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
          
          <div className="relative px-6 pb-6">
            {/* Enhanced Profile Picture */}
            <div className="relative -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-gray-800 shadow-2xl bg-gray-800 overflow-hidden group/avatar hover:border-purple-500 transition-all duration-500 hover:shadow-purple-500/50 hover:scale-110 hover:rotate-3">
                {(isEditing ? editData.profilePicture : user.profilePicture) ? (
                  <img 
                    src={isEditing ? editData.profilePicture : user.profilePicture} 
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover/avatar:scale-125 group-hover/avatar:rotate-6 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl group-hover/avatar:text-purple-400 group-hover/avatar:scale-110 transition-all duration-500">
                    👤
                  </div>
                )}
                
                {/* Avatar glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <label className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-3 cursor-pointer shadow-lg transition-all duration-500 hover:scale-125 hover:shadow-purple-500/50 group/upload hover:rotate-12">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'profilePicture')}
                  className="hidden"
                />
                <svg className="w-4 h-4 group-hover/upload:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </label>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex justify-end gap-3 mb-6">
              {!isEditing ? (
                <>
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 group/edit hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 group-hover/edit:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span className="font-medium">Edit</span>
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className="relative p-3 bg-gray-800/60 hover:bg-gray-700/60 rounded-xl transition-all duration-500 hover:scale-110 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 group/settings hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <svg className="w-5 h-5 text-gray-300 group-hover/settings:text-purple-400 group-hover/settings:rotate-180 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1"
                  >
                    <span className="font-medium">Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  >
                    <span className="font-medium">Cancel</span>
                  </button>
                </div>
              )}
            </div>

            {/* Enhanced Profile Info */}
            <div className="space-y-6">
              {/* Username */}
              <div className="group/field hover:scale-105 transition-transform duration-300">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover/field:text-purple-400 transition-colors duration-300">👤 Username</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 focus:scale-105"
                  />
                ) : (
                  <p className="text-2xl font-bold text-white group-hover/field:text-purple-300 transition-colors duration-300">@{user.username}</p>
                )}
              </div>

              {/* Email */}
              <div className="group/field hover:scale-105 transition-transform duration-300">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover/field:text-purple-400 transition-colors duration-300">📧 Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 focus:scale-105"
                  />
                ) : (
                  <p className="text-gray-300 group-hover/field:text-white transition-colors duration-300">{user.email}</p>
                )}
              </div>

              {/* Location */}
              <div className="group/field hover:scale-105 transition-transform duration-300">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover/field:text-purple-400 transition-colors duration-300">✈️ Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 focus:scale-105"
                  />
                ) : (
                  <p className="text-gray-300 group-hover/field:text-white transition-colors duration-300">{user.location}</p>
                )}
              </div>

              {/* Joined Date */}
              <div className="group/field hover:scale-105 transition-transform duration-300">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover/field:text-purple-400 transition-colors duration-300">📅 Joined Date</label>
                <p className="text-gray-300 group-hover/field:text-white transition-colors duration-300">{user.joinedDate}</p>
              </div>

              {/* Bio */}
              <div className="group/field hover:scale-105 transition-transform duration-300">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover/field:text-purple-400 transition-colors duration-300">✏️ Bio</label>
                {isEditing ? (
                  <textarea
                    value={editData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm resize-none transition-all duration-300 hover:bg-gray-800/70 focus:scale-105"
                  />
                ) : (
                  <p className="text-gray-300 leading-relaxed group-hover/field:text-white transition-colors duration-300">{user.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Dropdown - Fixed positioning outside of main card */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 pointer-events-none">
          <div className="relative">
            {/* Dropdown positioned to align with settings button */}
            <div 
              className="absolute top-20 right-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-3 min-w-52 animate-dropdown-in pointer-events-auto"
              style={{
                transform: 'translateX(-50%)',
              }}
            >
              <button
                onClick={() => handleSettingsAction('reset')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-800/50 rounded-xl transition-all duration-300 text-gray-300 hover:text-white group/item hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-blue-400 group-hover/item:scale-125 group-hover/item:rotate-12 transition-transform duration-300">🔁</span>
                <span className="font-medium">Reset Password</span>
              </button>
              <button
                onClick={() => handleSettingsAction('logout')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-800/50 rounded-xl transition-all duration-300 text-gray-300 hover:text-white group/item hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <span className="text-orange-400 group-hover/item:scale-125 group-hover/item:rotate-12 transition-transform duration-300">🚪</span>
                <span className="font-medium">Log Out</span>
              </button>
              <button
                onClick={() => handleSettingsAction('delete')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-500/20 rounded-xl transition-all duration-300 text-red-400 hover:text-red-300 group/item hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
              >
                <span className="group-hover/item:scale-125 group-hover/item:rotate-12 transition-transform duration-300">🗑️</span>
                <span className="font-medium">Delete Account</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for settings - backdrop */}
      {showSettings && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setShowSettings(false)}
        ></div>
      )}

      <style>{`
        
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes shooting-star {
          0% { transform: translateX(-100px) translateY(0px) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100px) translateY(-100px) rotate(45deg); opacity: 0; }
        }
        
        @keyframes shooting-star-delayed {
          0% { transform: translateX(-50px) translateY(0px) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(150px) translateY(-50px) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes dropdown-in {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
          animation-delay: 1s;
        }
        
        .animate-shooting-star-delayed {
          animation: shooting-star-delayed 4s linear infinite;
          animation-delay: 3s;
        }
        
        .animate-dropdown-in {
          animation: dropdown-in 0.3s ease-out forwards;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
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
}