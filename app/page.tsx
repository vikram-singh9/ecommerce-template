import Categories from '@/components/categories'
import Category from '@/components/category'
import Customer from '@/components/customer'
import ExploreProducts from '@/components/exploreproducts'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Sale from '@/components/sale'
import SaleProduct from '@/components/saleproduct'
import CountdownTimer from '@/components/salestimer'
import SellingProducts from '@/components/sellingproducts'
import TopHeader from '@/components/topheader'
import WomanCollection from '@/components/womancollection'
import React from 'react'

const home = () => {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Hero/>
      <Sale/>
      <CountdownTimer/>
      <SaleProduct/>
      <hr className='bg-[#D9D9D9] mx-20'/>
     <Category/>
     <hr className='bg-[#D9D9D9] mx-20 mt-14 '/>
     <SellingProducts/>
     <Categories/>
     <ExploreProducts/>
     <WomanCollection/>
     <Customer/>
     <Footer/>
    </div>
  )
}

export default home