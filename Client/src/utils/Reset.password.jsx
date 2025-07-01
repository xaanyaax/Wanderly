import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setEmailError("");

    if (!email) {
      setEmailError("Email address is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  const handleBackToLogin = () => {
    alert('Navigating back to login...');
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    alert('Returning to login...');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      
      {/* Main reset password container */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">🔄</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
          <p className="text-gray-400 mb-8">Enter your email address and we'll send you a link to reset your password.</p>

          {/* Reset form */}
          <div className="space-y-6">
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  emailError ? 'border-red-500' : 'border-gray-600'
                } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200`}
                placeholder="Enter your email address"
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {emailError}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-800 disabled:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending reset link...
                </div>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </div>

          {/* Back to login */}
          <button
            onClick={handleBackToLogin}
            className="w-full mt-6 bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Login
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-20">
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">Email Sent!</h3>
              <p className="text-gray-400 mb-6 text-sm">
                We've sent a password reset link to <span className="text-white font-medium">{email}</span>. 
                Please check your inbox and follow the instructions.
              </p>
              
              <button
                onClick={closeSuccessModal}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}