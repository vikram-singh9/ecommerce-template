import React from 'react'

import { Smartphone } from 'lucide-react'
import { Watch } from 'lucide-react'
import { Computer } from 'lucide-react'
import { GamepadIcon } from 'lucide-react'
import { Camera } from 'lucide-react'

const Category = () => {
  return (
    <div className='w-full h-auto'>
        
        <div className='flex items-center mx-20 gap-4 mt-14'> 
       <span className='bg-[#DB4444] w-4 h-9 rounded-sm'>.</span>
       <h2 className='text-[#DB4444] font-bold'>Today's</h2>
    </ div>
    <div className='mx-20 text-3xl font-bold my-4'>Browse By Categories</div>

        <div className='flex flex-wrap gap-14 mt-9 mx-20'>
            <div className='w-40 h-50 flex flex-col items-center justify-center border border-[#D9D9D9] p-5  rounded-sm  hover:bg-[#db4444f0]'>
                <Smartphone size={50}/><br />
                Phones
                </div>

                <div className='w-40 h-50 flex flex-col items-center justify-center border border-[#D9D9D9] p-5 rounded-sm  hover:bg-[#db4444f0]'>
                <Computer size={50}/><br />
                Computers
                </div>

                <div className='w-40 h-50 flex flex-col items-center justify-center border border-[#D9D9D9] p-5  rounded-sm  hover:bg-[#db4444f0]'>
                <Watch size={50}/><br />
                Smartwatches
                </div>

                <div className='w-40 h-50 flex flex-col items-center justify-center border border-[#D9D9D9] p-5  rounded-sm  hover:bg-[#db4444f0]'>
                <Camera size={50}/><br />
                Camera
                </div>

                <div className='w-40 h-50 flex flex-col items-center justify-center border border-[#D9D9D9] p-5  rounded-sm  hover:bg-[#db4444f0]'>
                <GamepadIcon size={50}/><br />
                Gaming
                </div>
                
        </div>
        
    </div>
  )
}

export default Category