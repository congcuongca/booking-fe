import { useState } from "react"
import Header from '../Header'
import Items from "../Items"
import Footer from "../Footer"
function Reservation()
{
    return(
        <>
            <div class="hidden xl:block absolute w-full inset-0 m-auto z-20">
                <div class="w-full max-w-4xl m-auto h-[473px] py-7 pt-24 flex gap-10">
                    <div class="relative h-[333px] min-w-[238px] shadow-lg"> 
                        <Items/>
                    </div>
                    <div class="text-sm flex flex-col">
                        <div class="flex items-center gap-2 mt-2">
                            <h3 class="font-bold text-2xl">TÊN PHIM </h3>
                            <div class="rounded-xl p-2 border border-white font-bold">3D</div>
                            <div class="flex items-center mt-2 gap-5 text-sm">
                                <p>Thể Loại</p>
                                <p>Nước </p>
                                <p>số phút </p>
                                <p>Đạo diễn </p>
                                <p>Dien vien</p>
                                <p>Khoi chieu</p>   
                            </div>
                            <p class="mt-5 line-clamp-4">"Kong và Godzilla - hai sinh vật vĩ đại huyền thoại, hai kẻ thủ truyền kiếp sẽ cùng bắt tay thực thi một sứ mệnh chung mang tính sống còn để bảo vệ nhân loại, 
                                và trận chiến gắn kết chúng với loài người mãi mãi sẽ bắt đầu."</p>
                            <div class="text-red-500 mt-5">Khuyến cáo </div>
                        </div>
                        <div class="mt-2 flex items-center gap-4 flex-1">
                            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R7rbddddba:" data-state="closed" class="text-sm underline">Chi tiết nội dung</button>
                            <button class="border border-yellow-500 rounded-full py-2 px-10 text-yellow-500 hover:scale-105" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rbrbddddba:" data-state="closed">Xem trailer</button>

                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex h-[91px] justify-center bg-[#1A1D23]" role="tablist" aria-orientation="horizontal">
                        <button class="focus:border-none focus:outline-none" id="headlessui-tabs-tab-:Rmrddddba:" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:Rurddddba:" disabled>
                            <div class="w-[72px] h-full flex flex-col items-center justify-center text-xs transition-colors bg-red-600">
                                <p>
                                    th.05
                                </p>
                                <p class="text-xl font-bold">16</p>
                                <p>Thứ năm</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="text-sm text-center mx-4 md:px-6 lg:mx-auto mt-4 text-orange-500">LƯU Ý </div>
                <div>
                    <div id="headlessui-tabs-panel-:Rurddddba:" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:Rmrddddba:">
                        <div class="mx-auto max-w-7xl">
                            <div class="pb-10 pt-5 w-full xl:w-3/4 mx-auto px-4 xl:px-0">
                                <div class="flex items-center justify-between mb-5">
                                    <div class="text-sm md:text-base self-end">
                                        Giờ chiếu:
                                        <span class="font-bold">20:15</span>
                                    </div>
                                    <div class="rounded-xl border border-red-500 p-2 text-sm md:text-base hidden xl:block">
                                        "Thời gian chọn ghế:"
                                        <span class="font-semibold">....</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-4 text-center font-bold text-lg">
                        Phong chieu so: 
                    </div>
                    <div class="space-y-1 -mx-4">
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                            <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">A</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">B</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">B1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">A</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">C1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">D</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">D1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">E</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">E1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">F</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">A</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">A</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A1</p>
                            </div>
                        </div>
                        <div class="grid md:flex gap-1 items-center justify-center seat">
                        <div class="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">A</div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A14</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A13</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A12</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A11</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A10</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A9</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A8</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A7</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A6</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A5</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A4</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A3</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A2</p>
                            </div>
                            <div class="aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 bg-gray-700 md:bg-[#252A31] cursor-pointer">
                                <p class="hidden lg:block text-sm lg:text-base">A1</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-2 w-full xl:w-auto">
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">Quay lại</button>
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-105 transition duration-300" disabled>Thanh toán</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Reservation