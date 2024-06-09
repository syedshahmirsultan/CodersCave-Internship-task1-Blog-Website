
import React from 'react';
import Image from 'next/image';
import { getAllBlogs } from '../utils/apiCalling';
import { urlForImage } from '../../../sanity/lib/image';
import { AllBlogType, SingleBlogType } from '../../../types';
import Link from 'next/link';
import HomePageBlogs from './HomePageBlogs';

const SomeBlogs = async () => {
    const blogData: AllBlogType = await getAllBlogs();
    return (
        <section className='w-full'>
            <div className="relative w-full h-auto md:w-5/6 mx-auto md:h-[350px]">
                <Image src="/images/someBlogs.png" alt="Image" width={1000} height={1000} className="w-full h-full" />
                <div className="absolute inset-0 bg-teal-950/80 text-center flex justify-center items-center">
                    <h1 className='text-3xl md:text-5xl lg:text-6xl text-yellow-300 font-bold mt-16 leading-relaxed'>
                        SOME OF OUR FAMOUS BLOGS
                    </h1>
                </div></div>
              <div className='mt-20'>
                <HomePageBlogs blogData={blogData}/>
                </div>
        </section>
    );
}

export default SomeBlogs;
