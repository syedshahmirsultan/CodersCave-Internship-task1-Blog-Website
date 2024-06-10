import React from 'react';
import { SingleBlogType } from '../../../types';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';

const BriefBlog = ({BlogData}:{BlogData :SingleBlogType}) => {
    return (
        <div className='w-full h-full mt-20 flex flex-col'>
        <Image src={urlForImage(BlogData.mainImage.asset)} width={1600} height={500} alt="Image of Blog" className="w-full max-h-80"/>
       <h2 className="text-xl md:text-2xl text-blue-700 mt-10 font-semibold text-center">{BlogData.categories[0].title}</h2>
        <h1 className='font-extrabold text-slate-800 md:text-4xl text-2xl mt-10 text-center'>
            {BlogData.title}
        </h1>
        <div className="flex gap-x-4 mt-20 justify-center ml-2">
        <Image src={urlForImage(BlogData.author.image.asset)} width={120} height={120} alt="Image of Author" className=" rounded-full "/>
        <div className="flex flex-col ml-2 gap-y-[2px] mt-2">
        <h3 className="text-2xl font-semibold text-slate-700  uppercase leading-relaxed ">{BlogData.author.name}</h3>
        <p className="text-xl text-slate-700 leading-relaxed">09-06-2024</p>
        <p className="text-xl text-slate-700 leading-relaxed"> 3 min Read</p>
        </div>
        </div>
        <div className="bg-gray-100 w-full h-auto p-8 lg:p-20 mt-20">
            <p className="text-xl text-slate-800 font-medium leading-relaxed">
            {BlogData.descriptionText} </p>
        </div></div>
    );
}

export default BriefBlog;
