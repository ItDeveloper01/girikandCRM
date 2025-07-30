import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className='flex w-full min-h-screen'>
      {/* Sidebar - hidden on small screens, fixed on md+ */}
      <Sidebar />

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col md:ml-64 ml-0'>
        <Navbar />
        <main className='flex-1 p-4 bg-gray-100 width900'>{children}</main>
      </div>
    </div>
  );
}
