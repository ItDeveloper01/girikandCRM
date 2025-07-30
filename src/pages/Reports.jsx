import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const reportData = [
  { month: 'Jan', bookings: 40, revenue: 120000 },
  { month: 'Feb', bookings: 60, revenue: 150000 },
  { month: 'Mar', bookings: 75, revenue: 200000 },
  { month: 'Apr', bookings: 50, revenue: 140000 },
  { month: 'May', bookings: 90, revenue: 250000 },
  { month: 'Jun', bookings: 120, revenue: 300000 },
];

export default function Reports() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold'>Reports</h1>
      <div className='bg-white shadow-md p-4 rounded'>
        <h2 className='text-lg font-semibold mb-4'>Bookings & Revenue Trend</h2>
        <ResponsiveContainer
          width='100%'
          height={350}>
          <LineChart data={reportData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='bookings'
              stroke='#3b82f6'
              activeDot={{ r: 8 }}
            />
            <Line
              type='monotone'
              dataKey='revenue'
              stroke='#22c55e'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
