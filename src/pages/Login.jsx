import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your auth logic here
    if (email == 'admin@girikand.com' && password === 'girikand') {
      console.log('Logging in with:', { email, password });
      navigate('/dashboard');
    } else {
      alert('login failed ');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4'>
      <div className='w-full max-w-md p-8 bg-white shadow-xl rounded-xl'>
        <h2 className='text-2xl font-bold text-center text-blue-600 mb-6'>
          Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className='space-y-5'>
          <div>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-1'>Password</label>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <button
            type='submit'
            className='w-full text-white py-2 rounded transition'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
