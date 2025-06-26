import React, { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '', email: '', phone: '', password: '', confirmPassword: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const InputField = ({ name, type, placeholder, showToggle, showValue, setShowValue }) => (
    <div className="relative">
      <input
        type={showToggle && showValue ? 'text' : type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField('')}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all backdrop-blur-sm"
        placeholder={placeholder}
        required
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setShowValue(!showValue)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
        >
          {showValue ? '👁️' : '👁️‍🗨️'}
        </button>
      )}
      <div className={`absolute left-3 top-0 -translate-y-1/2 px-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full transition-all ${focusedField === name || formData[name] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        {placeholder}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 hover:scale-105 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mb-3 shadow-lg">
              <div className="text-2xl animate-spin">🌍</div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Create Account</h1>
            <p className="text-white/70 text-sm">Join us and start your journey</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <InputField name="username" type="text" placeholder="Username" />
            <InputField name="email" type="email" placeholder="Email address" />
            <InputField name="phone" type="tel" placeholder="Phone number" />
            <InputField 
              name="password" 
              type="password" 
              placeholder="Password" 
              showToggle={true}
              showValue={showPassword}
              setShowValue={setShowPassword}
            />
            <InputField 
              name="confirmPassword" 
              type="password" 
              placeholder="Confirm password" 
              showToggle={true}
              showValue={showConfirmPassword}
              setShowValue={setShowConfirmPassword}
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Create Account</span>
                <span>→</span>
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Already have an account?{' '}
              <button className="text-purple-300 hover:text-purple-100 font-medium hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}