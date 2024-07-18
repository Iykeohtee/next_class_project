import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div>
                <Image src="/logo.png" width={50} height={50} />
            </div>
            <div className='flex justify-between'>
                <Link href='/contact'>contact</Link>
                <Link href='/about'>about</Link>
                <Link href='/dashbord'>dashbord</Link>
                <Link href='/services'>services</Link>
            </div>
        </div>
    )
}

export default Navbar;
