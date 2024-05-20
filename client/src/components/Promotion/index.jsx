import { useState } from "react"
import Header from '../Header'
import Footer from '../Footer'

function Promotion()
{
    return(
        <>
            <Header/>
            <div className="pt-20 xl:pt-28 pb-10 xl:pb-20 px-4 xl:px-0">
                <div className="mx-auto max-w-7xl">
                    <h3 className="text-2xl font-bold mb-4 xl:mb-10 text-center">Khuyến mãi</h3>
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
                        <div className="border border-gray-700 rounded-md overflow-hidden cursor-pointer">
                            <div className="relative h-[210px] cursor-pointer overflow-hidden">
                                <img src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017339.png&w=1920&q=75" alt="promotion" loading="lazy" decoding="async" data-nimg="fill" className="object-cover hover:scale-110 transition object-center"
                                 sizes="(min-width: 1300px) 303px, calc(100vw - 66px)" ></img>
                            </div>
                            <div className="p-4">
                                <p class="text-sm text-gray-400 mb-2">31/01/2024</p>
                                <h3 class="font-bold">ƯU ĐÃI GIÁ VÉ CHO HỌC SINH, SINH VIÊN 55.000Đ/VÉ 2D</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Promotion