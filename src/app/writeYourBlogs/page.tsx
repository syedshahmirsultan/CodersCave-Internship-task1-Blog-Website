import { LoginLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const WriteYourBlogsPage = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser()

    if(!user) {
     return (
        <div className="flex ml-6 lg:justify-center mt-40">
   <LoginLink className='text-2xl md:text-3xl flex gap-x-2 text-teal-500 hover:text-blue-700 font-bold leading-loose uppercase'>
    <LogOut size={34}  className="text-teal-500 hover:text-blue-700"/>   login first to write your own blog</LoginLink>
        </div>
     )
    }

    return (
        <section className="mt-40 w-full lg:mx-auto flex justify-center items-center"> 
      <Link href="/studio/structure"> <button className="bg-teal-500 px-20 hover:bg-blue-700 lg:px-48 h-12 rounded-2xl text-start ml-2 lg:ml-0 lg:text-center text-md md:text-lg text-white font-semibold uppercase leading-loose">
            write your own blog
        </button></Link>
        </section>
    );
}

export default WriteYourBlogsPage;
