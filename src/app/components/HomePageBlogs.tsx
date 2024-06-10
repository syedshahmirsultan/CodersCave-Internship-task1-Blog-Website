import React from 'react';
import Image from 'next/image';
import { AllBlogType, SingleBlogType } from '../../../types';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';

const HomePageBlogs = ({blogData} :{blogData :AllBlogType}) => {
    return (
        <div className="px-auto py-auto lg:py-20 lg:px-10 flex flex-col gap-10 min-w-full">
        {
            blogData.result.slice(0,5).map((post: SingleBlogType, index) => {
                return (
                    // Used Next.js Link for client-side navigation
                    <Link key={index} href={`/brief/${post.slug.current}`}>                   
                        <div className="flex flex-col md:flex-row gap-10 bg-gray-100 rounded-md rounded-tr-md rounded-br-md hover:shadow-lg duration-200">
                            <div className='w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative'>
                                {/* Used Next.js Image component for optimized image loading */}
                                <Image src={urlForImage(post.mainImage.asset)} alt="Blog post Image" width={500} height={500}
                                    className='w-full h-full  group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md' />
                                <div className='bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200' />
                                <div className='absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-slate-900 backdrop-blur-3xl rounded drop-shadow-lg text-white justify-center duration-200 p-5'>
                                    <p className="text-lg font-semibold text-white">Click to read</p>
                                </div>
                            </div>
                            <div className='w-full md:w-2/5 flex flex-col justify-between py-10 px-4'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-xs uppercase text-blue-600 font-semibold'>{post.categories[0].title}</p>
                                    </div>
                                    <h2 className='text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer'>{post.title}</h2>
                                    <p className='text-gray-500'>{post.body}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs text-gray-500 font-semibold'>9th May ,2024</p>
                                    <div className='flex items-center gap-2'>
                                        <Image src={urlForImage(post.author.image.asset)} height={200} width={200} alt="Image of Author" className="rounded-full object-cover mt-2 w-10" />
                                        <p className='text-sm font-medium'>{post.author.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
    );
}

export default HomePageBlogs;
