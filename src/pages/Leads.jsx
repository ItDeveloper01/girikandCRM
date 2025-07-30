import { Link } from 'react-router-dom';

export default function Leads() {
  const Leads = [
    {
      id: 1,
      tour: 'Kerala Backwaters',
      customer: 'Rohit Jadhav',
      date: '2025-08-10',
      status: 'Confirmed',
    },
    {
      id: 2,
      tour: 'Goa Beach Tour',
      customer: 'Karishma marathe',
      date: '2025-08-15',
      status: 'Pending',
    },
    {
      id: 3,
      tour: 'Leh‑Ladakh Adventure',
      customer: 'Aman Lele',
      date: '2025-08-20',
      status: 'Cancelled',
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Lead</h1>
        <Link to='/leads/new'>
          <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'>
            + Add New Lead
          </button>
        </Link>
      </div>
      <div className='overflow-x-auto bg-white shadow-md rounded'>
        <table className='w-full text-left'>
          <thead className='bg-gray-100 text-gray-600'>
            <tr>
              <th className='p-3'>Customer</th>
              <th className='p-3'>Tour</th>
              <th className='p-3'>Date</th>
              <th className='p-3'>Status</th>
            </tr>
          </thead>
          <tbody>
            {Leads.map((b) => (
              <tr
                key={b.id}
                className='border-t'>
                <td className='p-3'>{b.customer}</td>
                <td className='p-3'>{b.tour}</td>
                <td className='p-3'>{b.date}</td>
                <td className='p-3'>
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      b.status === 'Confirmed'
                        ? 'bg-green-100 text-green-700'
                        : b.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
