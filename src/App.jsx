import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Homepage';
import CustomerRegister from './pages/CustomerRegister';
import CustomerDetails from './pages/CustomerDetails';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Navbar onLoginClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
