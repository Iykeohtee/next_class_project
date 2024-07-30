import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '@/components/Search'

const Navbar = () => {
  return (
    <div>

      <div>
        <Image src="/logo.png" width={50} height={50} />
      </div>

      <div className='flex justify-between'>      
        <Search/>
       <Link href="/contact">Contact</Link>
       <Link href="/about">About us</Link>
       <Link href="/dashboard">Dashboard</Link>
       <Link href="/service">Services</Link>   
      </div>
    </div>
  )
}

export default Navbar  
