import { Link } from 'react-router-dom';

export default function Tours() {
  const tours = [
    {
      id: 1,
      name: 'Kerala Backwaters',
      price: '₹12,000',
      seats: 20,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Leh‑Ladakh Adventure',
      price: '₹25,000',
      seats: 15,
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Goa Beach Tour',
      price: '₹10,000',
      seats: 30,
      status: 'Active',
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Tours</h1>
        <Link to='/tours/new'>
          <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'>
            + Add New Tour
          </button>
        </Link>
      </div>
      <div className='overflow-x-auto bg-white shadow-md rounded'>
        <table className='w-full text-left'>
          <thead className='bg-gray-100 text-gray-600'>
            <tr>
              <th className='p-3'>Name</th>
              <th className='p-3'>Price</th>
              <th className='p-3'>Seats</th>
              <th className='p-3'>Status</th>
              <th className='p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((t) => (
              <tr
                key={t.id}
                className='border-t'>
                <td className='p-3'>{t.name}</td>
                <td className='p-3'>{t.price}</td>
                <td className='p-3'>{t.seats}</td>
                <td className='p-3'>
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      t.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                    {t.status}
                  </span>
                </td>
                <td className='p-3'>
                  <button className='px-2 py-1 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded'>
                    Edit
                  </button>
                  <button className='px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
