import { useState } from "react";

function Footer() {
  return (
    <div className='bg-black p-8 mt-8'>
      <div>
        <ul className='flex items-center justify-center flex-wrap gap-4 sm:gap-10 mb-6 sm:mb-10 text-sm md:text-base'>
          <li>Chính sách</li>
          <li>Lịch chiếu</li>
          <li>Tin tức</li>
          <li>Giá vé</li>
          <li>Hỏi Đáp</li>
          <li>Liên Hệ</li>
        </ul>
      </div>
      <div className='text-xs leading-4 text-center mb-6'>
        <p>Cơ quan chủ quản: BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH</p>
        <p>Bản quyền thuộc Trung tâm Chiếu phim Quốc gia.</p>
        <p>
          Giấy phép số: 224/GP- TTĐT ngày 31/8/2010 - Chịu trách nhiệm: Vũ Đức Tùng – Giám đốc.
        </p>
        <p>Địa chỉ: 87 Láng Hạ, Quận Ba Đình, Tp. Hà Nội - Điện thoại: 024.35141791</p>
      </div>
      <div className='text-sm leading-5 text-center'>
        Copyright 2023. NCC All Rights Reserved. Dev by
        <a href="https://anvui.vn/" className='text-blue-500'> Anvui.vn</a>
      </div>
    </div>
  );
}

export default Footer;
