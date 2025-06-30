import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    // Simulate logout process
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmModal(false);
      alert('Logged out successfully!');
      navigate("/login");
    }, 1500);
  };

  const confirmLogout = () => {
    setShowConfirmModal(true);
  };

  const cancelLogout = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      
      {/* Main logout container */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center">
          {/* Icon placeholder */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Sign Out</h2>
          <p className="text-gray-400 mb-8">Are you sure you want to sign out of your account?</p>

          {/* Logout button */}
          <button
            onClick={confirmLogout}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-800 disabled:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing out...
              </div>
            ) : (
              'Sign Out'
            )}
          </button>

          {/* Cancel button */}
          <button
            onClick={() => alert('Logout cancelled')}
            className="w-full mt-3 bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-20">
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">Confirm Sign Out</h3>
              <p className="text-gray-400 mb-6 text-sm">This action will sign you out of your current session.</p>
              
              <div className="flex space-x-3">
                <button
                  onClick={cancelLogout}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-800 disabled:to-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    </div>
                  ) : (
                    'Sign Out'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}