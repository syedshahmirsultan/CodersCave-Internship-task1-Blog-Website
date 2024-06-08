import React from 'react';
import Image from 'next/image'
const Hero = () => {
    return (
        <div className="w-full h-full mt-4">
        <div className='relative'>
            <Image src="/images/hero.jpg" height={1000} width={1000} alt="Image of Hero Section" className="lg:object-cover  h-auto lg:h-full w-full"/>
            <div className="absolute inset-0 bg-black/70 lg:gap-y-8 gap-y-2 flex flex-col justify-center items-center text-white p-4 lg:pt-36 lg:px-18 h-full">
              <h1 className='text-[35px] md:text-6xl  lg:text-[120px] text-gray-200 font-bold whitespace-nowrap'>Ignite Your Curiosity
              </h1> 
              <h2 className='text-xl md:text-3xl lg:ml-12 ml-2  lg:text-[55px] text-teal-400 font-semibold lg:leading-relaxed'>Discover the articles on Artificial Intelligence (AI), Health Care and Agriculture. </h2>
             <p className="text-yellow-300 text-xl font-semibold lg:text-6xl flex mx-auto mt-2 lg:mt-20 tracking-widest">Read. Write. Inspire.</p>
        </div>
    </div></div>
    
    );
}

export default Hero;
