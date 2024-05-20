import './style.css'
import { useState } from "react"
import Header from '../Header'
import Footer from '../Footer'

function Infopersonal()
{
    return(
        <>
            <Header/>
            <div className='pt-20 xl:pt-28 pb-10 xl:pb-20 px-4 xl:px-0'>
                <div className='mx-auto max-w-7xl'>
                    <h3 class="text-2xl font-bold mb-10 text-center">Thông tin cá nhân</h3>
                    <div class="flex items-center justify-center gap-4 flex-wrap" role="tablist" aria-orientation="horizontal">
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2" id="headlessui-tabs-tab-:re:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected" type="button" aria-controls="headlessui-tabs-panel-:rh:">Tài khoản của tôi</button>
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2" id="headlessui-tabs-tab-:rf:" role="tab" aria-selected="false" tabindex="-1" data-headlessui-state="" type="button" aria-controls="headlessui-tabs-panel-:rm:">Lịch sử mua vé</button>
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2" id="headlessui-tabs-tab-:rg:" role="tab" aria-selected="false" tabindex="-1" data-headlessui-state="" type="button" aria-controls="headlessui-tabs-panel-:rn:">Lịch sử điểm thưởng</button>
                    </div>
                    <div className='mt-10'>
                        <div id='headlessui-tabs-panel-:rh:'>
                            <div className='max-w-4xl mx-auto'>
                                <div className='space-y-2 w-full'>
                                    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Họ</label>
                                    <input className='flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring 
                                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' type="text" />
                                </div>
                                <div className='space-y-2 w-full'>
                                    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Tên</label>
                                    <input className='flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring 
                                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' type="text" />
                                </div>
                                <div className='space-y-2 w-full'>
                                    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Số điện thoại</label>
                                    <input className='flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring 
                                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' type="text" />
                                </div>
                                <div className='space-y-2 w-full'>
                                    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Email</label>
                                    <input className='flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring 
                                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-end pt-4 gap-4'>
                        <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input
                        bg-transparent hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3'>
                            Đổi mật khẩu
                        </button>
                        <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger 
                        text-destructive-foreground hover:bg-blue-500 h-9 rounded-md px-3'>
                            Lưu thông tin
                        </button>
                    </div>
                    
                </div>
            </div>
            
            <Footer/>

        </>
    )
}

export default Infopersonal