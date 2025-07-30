import React from 'react';

import { Users, Plane, CalendarDays, DollarSign } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const bookingData = [
  { month: 'Jan', bookings: 45 },
  { month: 'Feb', bookings: 60 },
  { month: 'Mar', bookings: 75 },
  { month: 'Apr', bookings: 50 },
  { month: 'May', bookings: 90 },
  { month: 'Jun', bookings: 120 },
];

const upcomingTours = [
  { id: 1, name: 'Kerala Backwaters', date: '2025-08-10', status: 'Open' },
  { id: 2, name: 'Leh-Ladakh Adventure', date: '2025-08-15', status: 'Closed' },
  { id: 3, name: 'Goa Beach Tour', date: '2025-08-20', status: 'Open' },
];

export default function TravelDashboard() {
  return (
    <div className='p-6 space-y-6 bg-gray-50 min-h-screen'>
      {/* Dashboard Header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Tour & Travel Dashboard</h1>
      </div>

      {/* Overview divs */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='shadow-md'>
          <div className='flex items-center gap-4 p-4'>
            <Plane className='h-10 w-10 text-blue-600' />
            <div>
              <p className='text-gray-500'>Active Tours</p>
              <h2 className='text-xl font-bold'>12</h2>
            </div>
          </div>
        </div>
        <div className='shadow-md'>
          <div className='flex items-center gap-4 p-4'>
            <Users className='h-10 w-10 text-green-600' />
            <div>
              <p className='text-gray-500'>Customers</p>
              <h2 className='text-xl font-bold'>540</h2>
            </div>
          </div>
        </div>
        <div className='shadow-md'>
          <div className='flex items-center gap-4 p-4'>
            <CalendarDays className='h-10 w-10 text-orange-600' />
            <div>
              <p className='text-gray-500'>Bookings</p>
              <h2 className='text-xl font-bold'>320</h2>
            </div>
          </div>
        </div>
        <div className='shadow-md'>
          <div className='flex items-center gap-4 p-4'>
            <DollarSign className='h-10 w-10 text-purple-600' />
            <div>
              <p className='text-gray-500'>Revenue</p>
              <h2 className='text-xl font-bold'>₹12.5L</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Trends Chart */}
      <div className='shadow-md'>
        <div className='p-4'>
          <h2 className='text-lg font-semibold mb-4'>Booking Trends</h2>
          <ResponsiveContainer
            width='100%'
            height={300}>
            <BarChart data={bookingData}>
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
      </div>

      {/* Upcoming Tours Table */}
      <div className='shadow-md'>
        <div className='p-4'>
          <h2 className='text-lg font-semibold mb-4'>Upcoming Tours</h2>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b text-gray-600'>
                <th className='p-2'>Tour</th>
                <th className='p-2'>Date</th>
                <th className='p-2'>Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTours.map((tour) => (
                <tr
                  key={tour.id}
                  className='border-b'>
                  <td className='p-2'>{tour.name}</td>
                  <td className='p-2'>{tour.date}</td>
                  <td className='p-2'>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        tour.status === 'Open'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}>
                      {tour.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
