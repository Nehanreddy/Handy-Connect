import { useNavigate } from 'react-router-dom';

const CustomerRegister = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Assume registration logic succeeds
    navigate('/customer-details');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Customer Register</h2>
      <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded mb-4" />
      <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded mb-4" />
      <button onClick={handleRegister} className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-500">
        Register
      </button>
      <div className="text-center text-gray-400 mb-4">OR</div>
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Continue with Google
      </button>
    </div>
  );
};

export default CustomerRegister;
