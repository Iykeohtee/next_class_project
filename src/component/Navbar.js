
import React from "react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
      <nav className="bg-white drop-shadow-2xl">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>    
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
            <div><Image src = '/logo.png' width={150} height={150}/></div>
          </div>
        </div>
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
