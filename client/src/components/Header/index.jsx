// Header.js
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header_name h-full'>
      <div className='header_links_left ml-12 hidden xl:flex items-center gap-10 z-30'>
        <Link to="/" className='hover:text-red-500 text-white'>Trang chủ</Link>
        <Link to="/schedule" className='hover:text-red-500 text-white'>Lịch chiếu</Link>
        <Link to="/promotion" className='hover:text-red-500 text-white'>Khuyến Mãi</Link>
        <Link to="/fare" className='hover:text-red-500 text-white'>Giá vé</Link>
        <Link to="/introduce" className='hover:text-red-500 text-white'>Giới thiệu</Link>
      </div>

      <div className='header_buttom ml-auto hidden xl:flex items-center gap-5'>
        <button className='button_1 inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2 hover:scale-105 transition duration-300 border-white'>
          Đăng ký
        </button>
        <button className='button_2 inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2 hover:scale-105 transition duration-300 border-white'>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Header;
