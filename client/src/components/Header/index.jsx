import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='flex items-center justify-between bg-[#474444] h-full'>
      <div className='ml-12 hidden xl:flex items-center gap-10 z-30'>
        <Link to="/" className='hover:text-red-500 text-white'>Trang chủ</Link>
        <Link to="/reservation" className='hover:text-red-500 text-white'>Lịch chiếu</Link>
        <Link to="/promotion" className='hover:text-red-500 text-white'>Khuyến Mãi</Link>
        <Link to="/introduce" className='hover:text-red-500 text-white'>Giới thiệu</Link>
      </div>

      <div className='ml-auto hidden xl:flex items-center gap-5 p-2'>
        <button 
          onClick={handleSignupClick}
          className='inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2 hover:scale-105 transition duration-300 border border-white'>
          Đăng ký
        </button>
        <button 
          onClick={handleLoginClick}
          className='inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2 hover:scale-105 transition duration-300 border border-white'>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Header;
