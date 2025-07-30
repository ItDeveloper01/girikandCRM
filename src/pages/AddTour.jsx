import { useState } from 'react';

export default function AddTour() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    duration: '',
    price: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend API
    console.log('Tour Submitted:', formData);
  };

  return (
    <div className='p-8 max-w-4xl mx-auto bg-white rounded shadow'>
      <h2 className='text-2xl font-bold mb-6 text-blue-600'>Add New Tour</h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='block text-sm font-medium mb-1'>Tour Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Location</label>
          <input
            type='text'
            name='location'
            value={formData.location}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Duration (days)
          </label>
          <input
            type='number'
            name='duration'
            value={formData.duration}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Price (INR)</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div className='md:col-span-2'>
          <label className='block text-sm font-medium mb-1'>Description</label>
          <textarea
            name='description'
            rows='4'
            value={formData.description}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Start Date</label>
          <input
            type='date'
            name='startDate'
            value={formData.startDate}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>End Date</label>
          <input
            type='date'
            name='endDate'
            value={formData.endDate}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div className='md:col-span-2'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
            Submit Tour
          </button>
        </div>
      </form>
    </div>
  );
}
