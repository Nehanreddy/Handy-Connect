import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        // Pass userId to CustomerDetails via state or localStorage
        localStorage.setItem('userId', data.userId);
        navigate('/customer-details');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Customer Register</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded mb-4"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded mb-4"
        value={formData.password}
        onChange={handleChange}
      />
      <button
        onClick={handleRegister}
        className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-500"
      >
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
