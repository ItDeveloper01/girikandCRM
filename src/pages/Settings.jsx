import { useState } from 'react';

export default function Settings() {
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    password: '',
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    alert('Settings updated successfully!');
  };

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold'>Settings</h1>

      {/* Profile Settings */}
      <div className='bg-white p-6 shadow-md rounded space-y-4'>
        <h2 className='text-lg font-semibold'>Profile Information</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Name
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2 mt-1'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2 mt-1'
            />
          </div>
        </div>
      </div>

      {/* Password Update */}
      <div className='bg-white p-6 shadow-md rounded space-y-4'>
        <h2 className='text-lg font-semibold'>Change Password</h2>
        <input
          type='password'
          name='password'
          placeholder='Enter new password'
          value={formData.password}
          onChange={handleChange}
          className='w-full border rounded px-3 py-2 mt-1'
        />
      </div>

      {/* Preferences */}
      <div className='bg-white p-6 shadow-md rounded space-y-4'>
        <h2 className='text-lg font-semibold'>Preferences</h2>
        <div className='flex items-center gap-4'>
          <input
            type='checkbox'
            name='notifications'
            checked={formData.notifications}
            onChange={handleChange}
            className='h-4 w-4'
          />
          <label className='text-sm text-gray-600'>Enable Notifications</label>
        </div>
        <div className='flex items-center gap-4'>
          <input
            type='checkbox'
            name='darkMode'
            checked={formData.darkMode}
            onChange={handleChange}
            className='h-4 w-4'
          />
          <label className='text-sm text-gray-600'>Dark Mode</label>
        </div>
      </div>

      <button
        onClick={handleSave}
        className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'>
        Save Changes
      </button>
    </div>
  );
}
