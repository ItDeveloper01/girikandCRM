import { useState } from 'react';
import { Bell, CheckCircle } from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    title: 'New Tour Booking',
    message: 'John Doe booked a Ladakh tour for 4 people.',
    time: '5 mins ago',
    read: false,
  },
  {
    id: 2,
    title: 'Customer Message',
    message: 'You received a query from Priya Sharma.',
    time: '20 mins ago',
    read: false,
  },
  {
    id: 3,
    title: 'Payment Received',
    message: '₹55,000 received for Kerala tour.',
    time: '1 hour ago',
    read: true,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((note) => ({ ...note, read: true })));
  };

  // Mark a single notification as read
  const markOneAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((note) => (note.id === id ? { ...note, read: true } : note))
    );
  };

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold text-gray-800'>Notifications</h1>
        <button
          onClick={markAllAsRead}
          className='text-sm text-blue-600 hover:underline'>
          Mark all as read
        </button>
      </div>

      <div className='bg-white shadow rounded-md divide-y'>
        {notifications.map((note) => (
          <div
            key={note.id}
            onClick={() => markOneAsRead(note.id)}
            className={`flex items-start p-4 gap-4 cursor-pointer transition hover:bg-gray-50 ${
              !note.read ? 'bg-blue-50' : ''
            }`}>
            <div className='pt-1'>
              {note.read ? (
                <CheckCircle className='text-green-500 w-5 h-5' />
              ) : (
                <Bell className='text-blue-500 w-5 h-5' />
              )}
            </div>
            <div className='flex-1'>
              <p className='font-medium text-gray-800'>{note.title}</p>
              <p className='text-sm text-gray-600'>{note.message}</p>
              <span className='text-xs text-gray-400'>{note.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  