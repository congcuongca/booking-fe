import './style.css'
import { useState } from "react"
import Header from '../Header'
import Footer from '../Footer'

function HistoryTiket()
{
    return(
        <>
            <div className='pt-20 xl:pt-28 pb-10 xl:pb-20 px-4 xl:px-0'>
                <div className='mx-auto max-w-7xl'>
                    <h3 class="text-2xl font-bold mb-10 text-center">Thông tin cá nhân</h3>
                    <div class="flex items-center justify-center gap-4 flex-wrap" role="tablist" aria-orientation="horizontal">
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2" id="headlessui-tabs-tab-:re:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected" type="button" aria-controls="headlessui-tabs-panel-:rh:">Tài khoản của tôi</button>
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2" id="headlessui-tabs-tab-:rf:" role="tab" aria-selected="false" tabindex="-1" data-headlessui-state="" type="button" aria-controls="headlessui-tabs-panel-:rm:">Lịch sử mua vé</button>
                        <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2" id="headlessui-tabs-tab-:rg:" role="tab" aria-selected="false" tabindex="-1" data-headlessui-state="" type="button" aria-controls="headlessui-tabs-panel-:rn:">Lịch sử điểm thưởng</button>
                    </div>
                </div>
                <div className='mt-4 ring-1 ring-gray-700 sm:mx-0 sm:rounded-xl'>
                    <table className='min-w-full divide-y divide-gray-600'>
                        <tr>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'>Ngày giao dịch</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'>Tên Phim</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'>Số vé</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6'>Số tiền</th>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default HistoryTiket