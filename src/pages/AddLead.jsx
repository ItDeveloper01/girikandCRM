import { useState } from 'react';

export default function AddLead() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    interest: '',
    notes: '',
    status: 'New',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Data Submitted:', formData);
    // Send to backend/API here
  };

  return (
    <div className='max-w-4xl mx-auto p-8 bg-white shadow rounded'>
      <h2 className='text-2xl font-bold text-blue-600 mb-6'>Add New Lead</h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='block text-sm font-medium mb-1'>Full Name</label>
          <input
            type='text'
            name='name'
            required
            value={formData.name}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Phone</label>
          <input
            type='tel'
            name='phone'
            required
            value={formData.phone}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Lead Source</label>
          <select
            name='source'
            value={formData.source}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'>
            <option value=''>Select</option>
            <option value='Website'>Website</option>
            <option value='Phone Call'>Phone Call</option>
            <option value='Walk-In'>Walk-In</option>
            <option value='Referral'>Referral</option>
            <option value='Social Media'>Social Media</option>
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Interested In
          </label>
          <input
            type='text'
            name='interest'
            value={formData.interest}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            placeholder='e.g. Europe Tour, Honeymoon Package'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Status</label>
          <select
            name='status'
            value={formData.status}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'>
            <option value='New'>New</option>
            <option value='Contacted'>Contacted</option>
            <option value='Follow-up'>Follow-up</option>
            <option value='Converted'>Converted</option>
            <option value='Lost'>Lost</option>
          </select>
        </div>

        <div className='md:col-span-2'>
          <label className='block text-sm font-medium mb-1'>Notes</label>
          <textarea
            name='notes'
            value={formData.notes}
            onChange={handleChange}
            rows='3'
            className='w-full border px-3 py-2 rounded'
            placeholder='Additional details or preferences'
          />
        </div>

        <div className='md:col-span-2'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
            Save Lead
          </button>
        </div>
      </form>
    </div>
  );
}
