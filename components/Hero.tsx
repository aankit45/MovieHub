'use client';
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => { }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Let's Explore 
        </h1>
        <p className='hero__subtitle'>
          Streamline your favorite movie
        </p>
        <CustomButton
          title="Explore Movies"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/spidy.jpg"
              alt="hero"
              fill
              className='object-contain' />
          </div>
          <div className='hero__image'>
            <Image src="/groot.jpg"
              alt="hero"
              fill
              className='object-contain' />
          </div>
          <div className='hero__image'>
            <Image src="/dead.jpg"
              alt="hero"
              fill
              className='object-contain' />
          </div>
          <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  )
}

export default Hero