import './style.css'
import { useState } from "react"

function Header()
{
    return(
        
        <div className='header_name h-full '>
            <div className='header_links_left ml-12 hidden xl:flex items-center gap-10 z-30'>
                <a className='hover:text-red-500 text-white'>Trang chủ</a>
                <a className='hover:text-red-500 text-white'>Lịch chiếu</a>
                <a className='hover:text-red-500 text-white'>Khuyến Mãi</a>
                <a className='hover:text-red-500 text-white'>Giá vé</a>
                <a className='hover:text-red-500 text-white'>Giới thiệu</a>
            </div>
            
            <div className='header_buttom ml-auto hidden xl:flex items-center gap-5'>
                <button className = 'button_1 inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2 hover:scale-105 transition duration-300 border-white'>Đăng ký</button>
                <button className = 'button_2 inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2 hover:scale-105 transition duration-300 border-white'>Đăng nhập</button>
            </div>
        </div>
    )
}

export default Header 