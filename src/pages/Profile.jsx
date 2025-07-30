import { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Ameya Joglekar',
    email: 'ameya@example.com',
    phone: '8793589521',
    role: 'Administrator',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
    console.log('Updated profile:', profile);
  };

  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold text-blue-600 mb-4'>User Profile</h2>

      <div className='bg-white p-6 shadow rounded-lg'>
        {!editing ? (
          <>
            <div className='space-y-4'>
              <p>
                <span className='font-semibold text-gray-600'>Name:</span>{' '}
                {profile.name}
              </p>
              <p>
                <span className='font-semibold text-gray-600'>Email:</span>{' '}
                {profile.email}
              </p>
              <p>
                <span className='font-semibold text-gray-600'>Phone:</span>{' '}
                {profile.phone}
              </p>
              <p>
                <span className='font-semibold text-gray-600'>Role:</span>{' '}
                {profile.role}
              </p>
            </div>
            <button
              onClick={() => setEditing(true)}
              className='mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
              Edit Profile
            </button>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='space-y-4'>
            <div>
              <label className='block text-sm text-gray-700'>Name</label>
              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
                className='w-full border px-4 py-2 rounded'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-700'>Email</label>
              <input
                type='email'
                name='email'
                value={profile.email}
                onChange={handleChange}
                className='w-full border px-4 py-2 rounded'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-700'>Phone</label>
              <input
                type='text'
                name='phone'
                value={profile.phone}
                onChange={handleChange}
                className='w-full border px-4 py-2 rounded'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-700'>Role</label>
              <input
                type='text'
                name='role'
                value={profile.role}
                onChange={handleChange}
                className='w-full border px-4 py-2 rounded'
              />
            </div>

            <div className='flex gap-4 pt-4'>
              <button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
                Save Changes
              </button>
              <button
                type='button'
                onClick={() => setEditing(false)}
                className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
