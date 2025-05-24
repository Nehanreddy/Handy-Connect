import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here (API call etc.)
    // On successful login:
    onClose();
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // Handle Google login here
    onClose();
    navigate('/');
  };

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-zinc-900 text-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b border-zinc-700">
        <h2 className="text-xl font-semibold">Sign In</h2>
        <button onClick={onClose} className="text-sm hover:text-red-500">✕</button>
      </div>

      <div className="p-6">
        <label className="text-sm block mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-md mb-4 bg-zinc-800 text-white"
          placeholder="Enter your email"
        />

        <label className="text-sm block mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 rounded-md mb-4 bg-zinc-800 text-white"
          placeholder="Enter your password"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md mb-3"
        >
          Log In
        </button>

        <div className="text-center text-gray-400 my-4">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black py-2 rounded-md font-semibold mb-4"
        >
          Continue with Google
        </button>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">No account yet?</p>
          <button
            onClick={() => {
              onClose();
              navigate('/customer-register');
            }}
            className="underline hover:text-white text-sm mt-1"
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
