import './style.css'
import { useState } from "react"
import Header from '../Header'
import Footer from '../Footer'

function News()
{
    return (
        <>
            <div className='pt-20 xl:pt-28 pb-10 xl:pb-20 px-4 xl:px-0'>
                <div className='mx-auto max-w-7xl'>
                    <h3 className='text-2xl font-bold mb-4 xl:mb-10 text-center'>
                        Tin Tức
                    </h3>
                    <div className='grid grid-cols-1 xl:grid-cols-4 gap-5'>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                        <div className='border border-gray-700 rounded-md overflow-hidden cursor-pointer'>
                            <img className='object-cover hover:scale-110 transition object-center' src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017541.jpg&w=1920&q=75" alt="promotion" sizes='(min-width: 1300px) 303px, calc(100vw - 66px)' srcSet=''/>
                            <div className='p-4'>
                                <p className='text-sm text-gray-400 mb-2'> 23/04/2024</p>
                                <h3 class="font-bold">Đợt phim Kỷ niệm các ngày lễ lớn 30/4, 1/5, 7/5 & 19/5/2024</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default News