import { useState } from "react";

export default function Delete() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [isConfirmationValid, setIsConfirmationValid] = useState(false);
  const [step, setStep] = useState(1); // 1: initial, 2: confirmation, 3: final warning

  const handleConfirmationChange = (e) => {
    const value = e.target.value;
    setConfirmationText(value);
    setIsConfirmationValid(value === "DELETE MY ACCOUNT");
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    // Simulate account deletion process
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmModal(false);
      alert('Account deleted successfully. You will be redirected to the home page.');
    }, 2000);
  };

  const proceedToConfirmation = () => {
    setShowConfirmModal(true);
    setStep(1);
  };

  const proceedToFinalWarning = () => {
    setStep(2);
  };

  const cancelDeletion = () => {
    setShowConfirmModal(false);
    setConfirmationText("");
    setIsConfirmationValid(false);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      
      {/* Main delete account container */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md border border-purple-700/50 rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <div className="text-center">
          {/* Warning Icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Delete Account</h2>
          <p className="text-gray-400 mb-6">This action cannot be undone. Please read the information below carefully.</p>

          {/* Warning Information */}
          <div className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-purple-400 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              What will be deleted:
            </h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• All your personal data and profile information</li>
              <li>• All your saved preferences and settings</li>
              <li>• All your activity history and logs</li>
              <li>• All associated files and documents</li>
              <li>• Access to all premium features and subscriptions</li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-4 mb-8 text-left">
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Notes:
            </h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• This action is permanent and cannot be reversed</li>
              <li>• You will lose access immediately after confirmation</li>
              <li>• Data recovery will not be possible after deletion</li>
              <li>• Active subscriptions will be cancelled</li>
            </ul>
          </div>

          {/* Delete button */}
          <button
            onClick={proceedToConfirmation}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl mb-3"
          >
            Delete My Account
          </button>

          {/* Cancel button */}
          <button
            onClick={() => alert('Account deletion cancelled')}
            className="w-full bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Multi-step Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-20">
          <div className="bg-gray-900/95 backdrop-blur-md border border-purple-700/50 rounded-2xl shadow-2xl p-6 w-full max-w-md">
            
            {/* Step 1: Initial Confirmation */}
            {step === 1 && (
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">Are you absolutely sure?</h3>
                <p className="text-gray-400 mb-6 text-sm">This will permanently delete your account and all associated data. This action cannot be undone.</p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={cancelDeletion}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={proceedToFinalWarning}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Final Confirmation with Text Input */}
            {step === 2 && (
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">Final Confirmation</h3>
                <p className="text-gray-400 mb-4 text-sm">To confirm account deletion, please type <span className="text-purple-400 font-mono font-semibold">DELETE MY ACCOUNT</span> in the field below:</p>
                
                <input
                  type="text"
                  value={confirmationText}
                  onChange={handleConfirmationChange}
                  placeholder="Type confirmation text here..."
                  className="w-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                
                <div className="flex space-x-3">
                  <button
                    onClick={cancelDeletion}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={!isConfirmationValid || isLoading}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-800 disabled:to-blue-800 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Deleting...
                      </div>
                    ) : (
                      'Delete Account'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}