'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import navLogo from '../../assets/navLogo.png'
import { menuItems } from './menuItems'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <div>
      <nav className='bg-main w-full'>
        <div className='NavContainer h-[120px] wrapper px-4 sm:px-6 flex justify-between items-center'>
          {/* nav logo  */}
          <Link href='/'>
            <div className='flex items-center gap-x-2 cursor-pointer'>
              <Image src={navLogo} alt='navlogo'  />
              <h1 className='hidden md:block text-5xl font-extrabold text-white'>ArchiAxis</h1>
            </div>
          </Link>

          {/* menu items  */}
          <div className='hidden md:flex'>
            <div className='flex items-center gap-x-2'>
              {
                menuItems.map((link) => (
                  <ul key={link.id}>
                    <li>
                      <Link
                        href={link.path}
                        className={`uppercase py-5 px-7 text-lg rounded-[100px]  ${isActive(link.path) ? 'bg-white text-[#3F6836]' : 'hover:bg-white hover:text-main text-white  transition-all duration-500'}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </ul>
                ))
              }
            </div>
            <Link href='/contact'>
              <button className='ml-4 uppercase py-5 px-7 bg-white rounded-[100px] cursor-pointer text-[#3F6836] font-Inter text-lg hover:text-main transition-all duration-300'>
                Contact Us
              </button>
            </Link>
          </div>

          {/* mobile hamburger  */}
          <div className='md:hidden text-lg text-white cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose size={28} /> : <FiMenu size={28} />}
          </div>
        </div>

        {/* mobile menu dropdown */}
        {menuOpen && (
          <div className='md:hidden absolute top-[120px] left-0 min-h-screen w-full bg-main flex flex-col items-center gap-4 py-6 z-50 transition-all duration-300'>
            {
              menuItems.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`uppercase text-lg  rounded-[100px]  py-5 px-7 transition-all duration-300 ${isActive(link.path) ? 'bg-white text-main' : 'text-white hover:bg-white hover:text-main'}`}
                >
                  {link.name}
                </Link>
              ))
            }
            <Link href='/contact' onClick={() => setMenuOpen(false)}>
              <button className='uppercase mt-4 py-5 px-7 bg-white rounded-[100px] cursor-pointer text-[#3F6836] font-Inter text-lg hover:text-main transition-all duration-300'>
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
