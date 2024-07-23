import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
          </div>
        <div>
            <Image src= "/logo.png" width={120} height={120}/>
        </div>
        <div className='hidden sm:ml-6 sm:block'>
          <div className='flex space-x-4'>
            <Link href="/contact" className='rounded-md px-3 py-3 text-sm font-medium text-gray-500 hover:bg-gray-800 hover:text-white'>Contact</Link>
            <Link href="/about" className='rounded-md px-3 py-3 text-sm font-medium text-gray-500 hover:bg-gray-800 hover:text-white'>About Us</Link>
            <Link href="/dashboard" className='rounded-md px-3 py-3 text-sm font-medium text-gray-500 hover:bg-gray-800 hover:text-white'>Dashboard</Link>
            <Link href="/services" className='rounded-md px-3 py-3 text-sm font-medium text-gray-500 hover:bg-gray-800 hover:text-white'>Services</Link>
            </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
