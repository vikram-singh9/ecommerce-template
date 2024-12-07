import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex items-center justify-center'>
        <Image
        src={'/images/footer.png'}
        alt='img'
        width={1300}
        height={400}
         />
    </div>
  )
}

export default Footer