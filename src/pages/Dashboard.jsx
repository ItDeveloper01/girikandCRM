import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { Plane, Users, CalendarDays, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { month: 'Jan', bookings: 45 },
  { month: 'Feb', bookings: 60 },
  { month: 'Mar', bookings: 75 },
  { month: 'Apr', bookings: 50 },
  { month: 'May', bookings: 90 },
  { month: 'Jun', bookings: 120 },
];

const upcoming = [
  { id: 1, name: 'Kerala Backwaters', date: '2025-08-10', status: 'Open' },
  { id: 2, name: 'Leh‑Ladakh Adventure', date: '2025-08-15', status: 'Closed' },
  { id: 3, name: 'Goa Beach Tour', date: '2025-08-20', status: 'Open' },
];

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font- text-black'>Dashboard</h1>
        <div>
          <Link to='/tours/new'>
            <button className='px-4 py-2 m-2 rounded'>Add New Tour</button>
          </Link>
          <Link to='/customers/new'>
            <button className='px-4 py-2 m-2 rounded'>Add New Customer</button>
          </Link>
          <Link to='/leads/new'>
            <button className='px-4 py-2 m-2 rounded'>Add New Lead</button>
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {[
          {
            icon: Plane,
            label: 'Active Tours',
            value: 12,
            color: 'text-blue-600',
          },
          {
            icon: Users,
            label: 'Customers',
            value: 540,
            color: 'text-green-600',
          },
          {
            icon: CalendarDays,
            label: 'Bookings',
            value: 320,
            color: 'text-orange-600',
          },
          {
            icon: DollarSign,
            label: 'Revenue',
            value: '₹12.5 L',
            color: 'text-purple-600',
          },
        ].map(({ icon: Icon, label, value, color }) => (
          <div
            key={label}
            className='bg-white shadow-md p-4 flex items-center gap-4 rounded'>
            <Icon className={`h-10 w-10 ${color}`} />
            <div>
              <p className='text-gray-500'>{label}</p>
              <h2 className='text-xl font-bold'>{value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-white shadow-md p-4 rounded'>
        <h2 className='text-lg font-semibold mb-4'>Booking Trends</h2>
        <ResponsiveContainer
          width='100%'
          height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey='bookings'
              fill='#3b82f6'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='bg-white shadow-md p-4 rounded'>
        <h2 className='text-lg font-semibold mb-4'>Upcoming Tours</h2>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-100 text-gray-600'>
              <th className='p-2'>Tour</th>
              <th className='p-2'>Date</th>
              <th className='p-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.map((t) => (
              <tr
                key={t.id}
                className='border-t'>
                <td className='p-2'>{t.name}</td>
                <td className='p-2'>{t.date}</td>
                <td className='p-2'>
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      t.status === 'Open'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                    {t.status}
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
