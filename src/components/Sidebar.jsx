import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className='w-64 bg-white fixed top-0 left-0 h-full shadow-md'>
      <div className='p-6 text-xl font-bold text-blue-600'>Travel Admin</div>
      <nav className='px-4'>
        <NavLink
          to='/dashboard'
          className='block p-3 rounded hover:bg-blue-100 text-gray-700'>
          Dashboard
        </NavLink>
        <NavLink
          to='/tours'
          className='block p-3 rounded hover:bg-blue-100 text-gray-700'>
          Tours
        </NavLink>
        <NavLink
          to='/leads'
          className='block p-3 rounded hover:bg-blue-100 text-gray-700'>
          Leads
        </NavLink>
        <NavLink
          to='/customers'
          className='block p-3 rounded hover:bg-blue-100 text-gray-700'>
          Customers
        </NavLink>
        <NavLink
          to='/reports'
          className='block p-3 rounded hover:bg-blue-100 text-gray-700'>
          Reports
        </NavLink>
        <NavLink
          to='/settings'
          className='block p-3 rounded hover:bg-blue-100 text-gray-700'>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
