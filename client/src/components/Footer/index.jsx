import './style.css'
import { useState } from "react"

function Footer()
{
    return(
        <div className='Footer_box'>
            <div>
                <ul className='flex items-center justify-center flex-wrap gap-4 sm:gap-10 mb-6 sm:mb-10 text-sm md:text-base '>
                    <li>Chính sách</li>
                    <li>Lịch chiếu</li>
                    <li>Tin tức</li>
                    <li>Giá vé</li>
                    <li>Hỏi Đáp</li>
                    <li>Liên Hệ</li>
                </ul>
            </div>
            <div className='foter_text'>
                <p>Cơ quan chủ quản: BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH</p>
                <p>Bản quyền thuộc Trung tâm Chiếu phim Quốc gia.</p>
                <p>
                    Giấy phép số: 224/GP- TTĐT ngày 31/8/2010 - Chịu trách nhiệm: Vũ Đức Tùng – Giám đốc.
                </p>
                <p>Địa chỉ: 87 Láng Hạ, Quận Ba Đình, Tp. Hà Nội - Điện thoại: 024.35141791</p>
            </div>
            <div class="foter_text_2">
                Copyright 2023. NCC All Rights Reservered. Dev by
                <a href="https://anvui.vn/">Anvui.vn</a>
            </div>
        </div>
    )
}

export default Footer