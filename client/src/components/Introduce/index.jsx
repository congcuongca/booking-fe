import { useState } from "react"
import Header from '../Header'

function Introduce()
{
    return(
        <>
            <Header/>
            <div className="mx-auto max-w-7xl">
                <h3 class="text-2xl font-bold text-center mb-6">Giới thiệu</h3>
                <div class="mt-10">
                    <p class="ql-align-justify">"Trung tâm Chiếu phim Quốc gia (tên giao dịch quốc tế là National Cinema Center) là đơn vị sự nghiệp công lập, trực thuộc 
                    Bộ Văn hóa, Thể thao và Du lịch, có chức năng tổ chức chiếu phim phục vụ các nhiệm vụ chính trị, xã hội, hợp tác quốc tế; trưng bày điện ảnh; điều tra xã hội học về nhu
                     cầu khán giả để phục vụ cho công tác định hướng phát triển ngành điện ảnh."</p>
                </div>
                <p class="ql-align-justify">&nbsp;&nbsp;&nbsp;Ngày thành lập: 12/07/2002</p>
                <p class="ql-align-justify">&nbsp;&nbsp;&nbsp;Trụ sở: 87 Láng Hạ, quận Ba Đình, thành phố Hà Nội.</p>
                <p class="ql-align-justify">&nbsp;&nbsp;&nbsp;Website: www.chieuphimquocgia.com.vn</p>
                <p class="ql-align-justify">&nbsp;&nbsp;&nbsp;Email: cuongca1207@gmail.com</p>
                <p>&nbsp;&nbsp;&nbsp;Số điện thoại: 024.3514 1791 / 024.3514 7823</p>
            </div>
        </>
    )
}
export default Introduce