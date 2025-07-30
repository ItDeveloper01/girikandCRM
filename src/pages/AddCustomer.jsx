import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export default function AddCustomer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend or API here
    console.log('Customer Data Submitted:', formData);
  };

  return (
    <div className='max-w-4xl mx-auto p-8 bg-white shadow rounded'>
      <h2 className='text-2xl font-bold text-blue-600 mb-6'>
        Add New Customer
      </h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='block text-sm font-medium mb-1'>Full Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
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
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Phone Number</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Gender</label>
          <select
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'>
            <option value=''>Select</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Date of Birth
          </label>
          <DatePicker
            selected={formData.dob}
            onChange={(date) => handleChange('dob', date)}
            dateFormat='dd/MM/yyyy'
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            placeholderText='Select your DOB'
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>City</label>
          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Country</label>
          <input
            type='text'
            name='country'
            value={formData.country}
            onChange={handleChange}
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div className='md:col-span-2'>
          <label className='block text-sm font-medium mb-1'>Address</label>
          <textarea
            name='address'
            value={formData.address}
            onChange={handleChange}
            rows='3'
            className='w-full border px-3 py-2 rounded'
          />
        </div>

        <div className='md:col-span-2'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
}
