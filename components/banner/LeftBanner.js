'use client'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import {FaFacebook, FaTwitter,  FaLinkedinIn} from "react-icons/fa"
import {SiNuxtdotjs, SiTwitter, SiTailwindcss} from "react-icons/si"


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI DesiGner."],
        loop: true, 
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed:2000
    });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'> Hi, I'm {" "}
                    <span className='text-designColor capitalize'> Patrick Kamgaing</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a <span>{text}</span>
                </h2>
                <p className='text-base font-boduFont leading-6 tracking-wide'>
                    à remplir......
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                   FIND ME IN 
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaFacebook/>
                    </span>
                    <span className='bannerIcon'>
                        <FaTwitter/>
                    </span>
                    <span className='bannerIcon'>
                        <FaLinkedinIn />
                    </span>
                </div>
                </div>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                   FIND ME IN 
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <SiTwitter/>
                    </span>
                    <span className='bannerIcon'>
                        <SiTailwindcss/>
                    </span>
                    <span className='bannerIcon'>
                        <SiNuxtdotjs/>
                    </span>
                </div>
                </div>
            </div>
        </div>
  )
}

export default LeftBanner