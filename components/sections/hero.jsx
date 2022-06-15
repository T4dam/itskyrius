import React from 'react';
import HeroLayout from '../hero-layout';

const Hero = () => {
  return (
    <section className=' one section pt-[58px] flex justify-center'>
        <div className='container margin-auto bg-yellow-200 h-full w-full flex justify-center items-center text-center'>
            <HeroLayout />
        </div>
    </section>
  )
}

export default Hero