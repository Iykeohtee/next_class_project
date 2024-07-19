"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(isClick);
  };
  
  return (
      <nav className="bg-white drop-shadow-2xl">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>    
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
              <div className="flex items-center">
            <div><Image src = '/logo.png' width={150} height={150}/></div>
            
    </div>
          </div>
        </div>
        
          <form class="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-400 focus:border-red-300 dark:bg-gray-300 dark:border-red-500 dark:placeholder-gray-400 dark:text-white light:focus:border-blue-500" placeholder="Search..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-red-700 dark:focus:ring-red-600">Search</button>
    </div>
</form>

        <div className='hidden md:block'>
          <div className='ml-4 flex items-center space-x-4'>
            <Link href='/' className='text-red-500 hover:bg-black hover:text-white rounded-lg p-2'>Home</Link>
            <Link href='/' className='text-red-500 hover:bg-black hover:text-white rounded-lg p-2'>About</Link>
            <Link href='/' className='text-red-500 hover:bg-black hover:text-white rounded-lg p-2'>Services</Link>
            <Link href='/' className='text-red-500 hover:bg-black hover:text-white rounded-lg p-2'>Contact</Link>
          </div>
        </div>
      </div>
      </div>
  </nav>
  )
};

export default Navbar
