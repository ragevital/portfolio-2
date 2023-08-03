import React from 'react'
import LeftBanner from '../../components/banner/LeftBanner'
import RightBanner from '../../components/banner/RightBanner'

const Banner = () => {
  return (
    <section id="home" 
    className='w-full pt-10  pb-20 flex items-center flex border-b-[1px] 
    border-b-black'>
        <LeftBanner />
        <RightBanner />
    </section>
  )
}

export default Banner