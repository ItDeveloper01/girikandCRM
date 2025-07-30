import { useState, useRef, useEffect } from 'react';
import { Search, Bell, LogOut, User, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Replace with actual logout logic
    console.log('Logged out');
    navigate('/');
  };

  return (
    <div className='h-16 bg-white shadow-md flex items-center justify-between px-6 sticky top-0 z-10'>
      {/* Search */}
      <div className='flex items-center gap-2'>
        <Search className='w-5 h-5 text-gray-500' />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none bg-transparent text-gray-700 w-64'
        />
      </div>

      {/* Right: Bell + Profile */}
      <div
        className='flex items-center gap-6 relative'
        ref={dropdownRef}>
        <Link
          to='/notifications'
          className='relative p-2 hover:bg-gray-100 rounded-full'>
          <Bell className='w-6 h-6 text-gray-700' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full'>
            3
          </span>
        </Link>

        {/* Avatar */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className='w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold focus:outline-none'>
          A
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className='absolute right-0 top-14 w-48 bg-white border rounded-md shadow-lg z-50'>
            <Link
              to='/profile'
              className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100'
              onClick={() => setDropdownOpen(false)}>
              <User className='w-4 h-4' /> Profile
            </Link>
            <Link
              to='/settings'
              className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100'
              onClick={() => setDropdownOpen(false)}>
              <Settings className='w-4 h-4' /> Settings
            </Link>
            <button
              onClick={handleLogout}
              className='w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 border-t'>
              <LogOut className='w-4 h-4' /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
