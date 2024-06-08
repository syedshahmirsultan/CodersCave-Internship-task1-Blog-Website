"use client";
import React, { useState } from "react";
import { Menu, X, SquarePen,Search } from "lucide-react";
import Link from "next/link";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-black focus:outline-none mr-8">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 bg-white p-6 pr-10 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-2">
            <li className="mb-4 w-96 ml-12 text-center">
                <div className="w-[75%] p-2 border mx-auto rounded-2xl flex gap-x-2 ">
                <Search size={18} className="text-center ml-1 mt-[2px] text-gry-700"/>
              <input
                type="text"
                placeholder="Search..."
             className="outline-none" /></div>
            </li>
            <li className="w-96 ">
              <Link
                href="/ai"
                className="text-slate-700 w-full hover:bg-gray-300  p-4 rounded-lg block text-center"
              >
                AI
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="/agriculture"
                className="text-slate-700 hover:bg-gray-300 w-full p-4 rounded-lg block text-center"
              >
                Agriculture
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="/health-care"
                className="text-slate-700 hover:bg-gray-300 w-full p-4 rounded-lg block text-center"
              >
                Health Care
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="/all-blogs"
                className="text-slate-700 hover:bg-gray-300 w-full p-4 rounded-lg block text-center"
              >
                All Blogs
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="/your-blogs"
                className="flex items-center justify-center text-slate-700 hover:bg-gray-300 w-full p-4 rounded-lg"
              >
                <SquarePen size={20} className="mr-1" />
                <span>Your Blogs</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
