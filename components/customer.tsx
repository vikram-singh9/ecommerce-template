import React from 'react'
import Image from 'next/image'
const Customer = () => {
  return (
    <div className='my-28 flex items-center justify-center'>
        <Image
        src={'/images/customer.png'}
        alt='img'
        width={900}
        height={150}
        
        />
    </div>
  )
}

export default Customer