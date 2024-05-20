import './style.css'
import { useState } from "react"

function Items({imageUrl,title})
{
    return(
        <div className='px-4 pt-2 bg-black bg-opacity-30 h-64 w-44'>
            <img className="object-cover rounded" src={imageUrl} alt={title} />
            <h3 className="text-lg font-semibold text-white mt-2 text-center">{title}</h3>
        </div>
    )
}

export default Items 