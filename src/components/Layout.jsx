import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';

export const Layout = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Outlet />
    </div>
  );
};
