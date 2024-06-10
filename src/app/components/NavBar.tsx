"use client"
import { Search, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamBurger";
import {useState } from 'react'

export default function NavBar() {
  const [searchVal,setSearchVal] = useState("");

  return (
    <section className="flex h-20 top-0 sticky backdrop-blur-xl justify-between items-center z-20">
    <div className="flex gap-x-16" >
<Link href="/"><h1 className="text-3xl text-teal-400 ml-4 font-bold hover:text-blue-700">
BLOGGYFIRE
</h1></Link>
<div className="w-72 text-center h-[25px] mt-1.5 outline-none border-none outline-slate-300 hidden lg:flex rounded-2xl">
 <Link href={`/search?query=${searchVal}`}><Search size={18} className="text-center ml-2 mt-[3px] text-gray-700"/></Link>
<input placeholder="Search the Blog title"
value={searchVal}
onChange={(e)=> setSearchVal(e.target.value)}
className="outline-none pl-2 bg-transparent text-teal-400"/></div>

</div>
<div className="lg:flex hidden mx-auto justify-center gap-x-8">
 <Link href="/ai" className ="hover:scale-125 duration-200 hover:font-bold "> <span className="text-md font-semibold text-teal-400 hover:text-blue-700">AI</span></Link>
 <Link href="/agriculture"  className ="hover:scale-110 duration-200 hover:font-bold "> <span className="text-md font-semibold text-teal-400 hover:text-blue-700">Agriculture</span></Link>
 <Link href="/healthCare"  className ="hover:scale-110 duration-200 hover:font-bold "> <span className="text-md font-semibold text-teal-400 hover:text-blue-700">Health Care</span></Link>
 <Link href="/allBlogs"  className ="hover:scale-110 duration-200 hover:font-bold "> <span className="text-md font-semibold text-teal-400 hover:text-blue-700">All Blogs</span></Link>
 <Link href="/writeYourBlogs"  className ="hover:scale-110 duration-200 hover:font-bold "> <span className="text-md font-semibold text-teal-400 flex hover:text-blue-700"><SquarePen size={20} className="mr-1"/> Your Blogs</span></Link>
</div>
<div  className="lg:hidden flex pt-4 pr-4">
  <HamburgerMenu/>
</div>

    </section>
  );
}
