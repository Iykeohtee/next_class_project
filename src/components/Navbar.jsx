"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center  bg-white shadow-md  h-10 justify-between">
        <div>
          <Link href="../src/page">
            <Image src="/logo.png" width={60} height={60} />
          </Link>
        </div>
        <div className="flex font-medium text-black">
          <Link href="/about" className="px-2 hover:text-indigo-800">
            About
          </Link>
          <br />
          <Link href="/contact" className="px-2 hover:text-indigo-800">
            Contact
          </Link>
          <br />
          <Link href="/dashboard" className="px-2 hover:text-indigo-800">
            Dashboard
          </Link>
          <br />
          <Link href="/portfolio" className="px-2 hover:text-indigo-800">
            Portfolio
          </Link>
          {/* <ul className="flex gap-3">
            <li>About</li>
            <li>Contact</li>
            <li>Dashboard</li>
            <li>Portfolio</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
