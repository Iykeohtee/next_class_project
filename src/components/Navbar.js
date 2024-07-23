import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/components/Search';
const Navbar = () => {
    return (

        <div className='flex items-center justify-between h-16 bg-slate-200 shadow-lg	shadow-slate-50	--tw-shadow-color: #f8fafc;'>
            <Image src="/logo.png" alt='' width={150} height={150} />

            <div className='flex justify-between items-center'>
                <Search />

            </div>
            <div className='ml-4 flex items-center space-x-6 text-lg font-size: 1.125rem; font-serif	
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-medium	font-weight: 500; mx-0.5	margin-right: 0.125rem'>
                <Link href='/contact' className='text-gray-500 hover:bg-red-400 hover:text-white hover:box-border h-15 w-15 p-3 border-4 ... '>Contact</Link>
                <Link href='/about' className='text-gray-500 hover:bg-red-400 hover:text-white hover:box-border h-15 w-15 p-3 border-4 ... '>About</Link>
                <Link href='/dashbord' className='text-gray-500 hover:bg-red-400 hover:text-white hover:box-border h-15 w-15 p-3 border-4 ... '>Dashbord</Link>
                <Link href='/services' className='text-gray-500 hover:bg-red-400 hover:text-white hover:box-border h-15 w-15 p-3 border-4 ... '>Services</Link>
            </div>
        </div>

    )
}

export default Navbar;
