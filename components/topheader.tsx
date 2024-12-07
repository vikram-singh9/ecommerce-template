import React from 'react'
import { ChevronDown } from 'lucide-react'

const TopHeader = () => {
  return (
    
    <div className='bg-black text-white text-sm py-2 px-4 flex items-center justify-around pl-52 '>
        <div>
            <p>Summer Sale for All Swim Suits and free Express Delivery - 50%! <span className='font-bold underline'>Shop Now</span></p>
            
        </div>

        <div>
        <span className='flex items-end justify-end'>English<ChevronDown size={20}/></span>
        </div>

    </div>
  )
}

export default TopHeader