import './style.css'
import { useState } from "react"
import Header from '../Header'

function Fare()
{
    return(
        <>
            <div className='mx-auto max-w-7xl'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-bold'>Giá vé</h1>
                    <p>(Áp dụng từ ngày)</p>
                </div>
                <div className='t-4 xl:mt-10 space-y-4 my-10'>
                    <h1 classname='font-semibold text-lg'> 1. GIÁ VẾ XEM PHIM 2D</h1>
                </div>
            </div>
        </>
    )
}
export default Fare