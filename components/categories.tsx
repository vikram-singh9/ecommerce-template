import React from 'react'
import Image from 'next/image'
const Categories = () => {
  return (
    <div className='flex items-center justify-center my-28'>
        <Image
        src={'/images/jbl.png'}
        alt='img'
        width={1040}
        height={400}
         />
    </div>
  )
}

export default Categories