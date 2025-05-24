import { useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save details logic here
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Customer Details</h2>
      <input placeholder="Full Name" className="w-full mb-3 px-4 py-2 border rounded" />
      <input placeholder="Phone Number" className="w-full mb-3 px-4 py-2 border rounded" />
      <input placeholder="Address Line 1" className="w-full mb-3 px-4 py-2 border rounded" />
      <input placeholder="Address Line 2" className="w-full mb-3 px-4 py-2 border rounded" />
      <input placeholder="City" className="w-full mb-3 px-4 py-2 border rounded" />
      <input placeholder="State" className="w-full mb-3 px-4 py-2 border rounded" />
      <input placeholder="Pincode" className="w-full mb-4 px-4 py-2 border rounded" />
      <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        Submit
      </button>
    </div>
  );
};

export default CustomerDetails;
