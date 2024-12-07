import { Heart, Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly text-black w-full mt-7 pb-4 shadow-md'>
        <div><h1 className='font-bold text-2xl pr-20'>Exclusive</h1></div>

        <div className='flex gap-11'>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
        <a href="#">Signup</a>
        </div>

        <div className='flex gap-9'>
        <div className="relative w-full max-w-sm">
      

      
      <Input
        type="text"
        placeholder="What are you looking for?"
        className="w-full bg-[#fff] pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
    </div >
    <div className='flex items-center gap-6 pl-4'><Heart />
    <ShoppingCart/></div>
            
        </div>
        
    </div>
  )
}

export default Navbar