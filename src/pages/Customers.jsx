import { Link } from 'react-router-dom';
export default function Customers() {
  const customers = [
    {
      id: 1,
      name: 'Ajay Deshpande',
      email: 'ajay.deshpande@gmail.com',
      phone: '9999999999',
      bookings: 2,
    },
    {
      id: 2,
      name: 'Jay Singh',
      email: 'jay.singh@gmail.com',
      phone: '8888888888',
      bookings: 3,
    },
    {
      id: 3,
      name: 'Amit Deshpande',
      email: 'amit.d@gmail.com',
      phone: '7777777777',
      bookings: 1,
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Customers</h1>
        <Link to='/customers/new'>
          <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'>
            + Add New Customer
          </button>{' '}
        </Link>
      </div>
      <div className='overflow-x-auto bg-white shadow-md rounded'>
        <table className='w-full text-left'>
          <thead className='bg-gray-100 text-gray-600'>
            <tr>
              <th className='p-3'>Name</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Phone</th>
              <th className='p-3'>Bookings</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className='border-t'>
                <td className='p-3'>{c.name}</td>
                <td className='p-3'>{c.email}</td>
                <td className='p-3'>{c.phone}</td>
                <td className='p-3'>{c.bookings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
