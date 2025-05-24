import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('User not found. Please register first.');
      navigate('/customer-register');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, ...formData }),
      });

      if (res.ok) {
        alert('Details saved successfully');
        navigate('/');
      } else {
        alert('Failed to save details');
      }
    } catch (error) {
      alert('Error connecting to server');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Customer Details</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        className="w-full mb-3 px-4 py-2 border rounded"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        className="w-full mb-3 px-4 py-2 border rounded"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        name="address1"
        placeholder="Address Line 1"
        className="w-full mb-3 px-4 py-2 border rounded"
        value={formData.address1}
        onChange={handleChange}
      />
      <input
        name="address2"
        placeholder="Address Line 2"
        className="w-full mb-3 px-4 py-2 border rounded"
        value={formData.address2}
        onChange={handleChange}
      />
      <input
        name="city"
        placeholder="City"
        className="w-full mb-3 px-4 py-2 border rounded"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        name="state"
        placeholder="State"
        className="w-full mb-3 px-4 py-2 border rounded"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        name="pincode"
        placeholder="Pincode"
        className="w-full mb-4 px-4 py-2 border rounded"
        value={formData.pincode}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
      >
        Submit
      </button>
    </div>
  );
};

export default CustomerDetails;
