import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white shadow-md">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-wide">Handy Connect</span>
        </Link>
      </div>
      <button
        onClick={onLoginClick}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <span className="text-sm font-medium">Login / Register</span>
      </button>
    </nav>
  );
};

export default Navbar;
