import React from 'react'
import Image from 'next/image'
const WomanCollection = () => {
  return (
    <div>
         <div className='flex items-center mx-20 gap-4 mt-14'> 
       <span className='bg-[#DB4444] w-4 h-9 rounded-sm'>.</span>
       <h2 className='text-[#DB4444] font-bold'>Today's</h2>
    </div>
    <div className='mx-20 text-3xl font-bold my-4'>Flash Sales</div>

    <div className='flex items-center justify-center my-14'>
        <Image
        src={'/images/woman.png'}
        alt='img'
        width={1040}
        height={400}
         />

    </div>
    </div>
  )
}

export default WomanCollection