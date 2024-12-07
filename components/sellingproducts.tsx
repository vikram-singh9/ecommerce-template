import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
const SellingProducts = () => {
  return (
    <div className='w-full h-auto'>
        <div>
        <div className='flex items-center mx-20 gap-4 mt-14'> 
       <span className='bg-[#DB4444] w-4 h-9 rounded-sm'>.</span>
       <h2 className='text-[#DB4444] font-bold '>Today's</h2>
       <Button variant={'destructive'} className='ml-[825px] px-7'>View All</Button>
    </div>
    <div className='mx-20 text-3xl font-bold my-4'>Best Selling Products</div>
        </div>

        <div className='ml-20 flex flex-wrap gap-12 mt-12 '>
            <div>
                <Image
                src={'/images/coat.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>

            <div>
                <Image
                src={'/images/bag.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>

            <div>
                <Image
                src={'/images/speaker.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>

            <div>
                <Image
                src={'/images/books.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>
            
        </div>
    </div>
  )
}

export default SellingProducts