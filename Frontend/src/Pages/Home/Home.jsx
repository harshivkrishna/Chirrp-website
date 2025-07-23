import React from 'react'
import Hero from '../../Components/Hero/Hero'
import CouponSlider from '../../Components/CouponSlider/CouponSlider'
import PopularCoupon from '../../Components/PopularCoupon/PopularCoupon'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <CouponSlider/>
        <PopularCoupon/>
        <Footer/>
    </>
  )
}

export default Home
