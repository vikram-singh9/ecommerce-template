import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center my-7 w-full'>
        <div className='py-8 '>
            <ul className='space-y-3'>
                <li className='flex gap-9'>Woman's Fashion <ChevronRight/></li>
                <li className='flex gap-14'>Men's Fashion <ChevronRight/></li>
                <li>Electronics</li>
                <li>Home & Lifestyles</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Grocerie's & Pets</li>
                <li>Health & Beauty</li>
            </ul>

        </div>
        <div>
            <Image
            src={'/images/Frame 560.png'}
            alt='img'
            width={860}
            height={360}
            priority
            className='pl-20'

            />
        </div>
    </div>
  )
}

export default Hero