import Link from 'next/link'
import React from 'react'
import { Jersey_15 } from 'next/font/google'

const font = Jersey_15({ weight: "400", subsets: ["latin"]});

const Navbar = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center h-16 w-full'>
        <Link href='/'>
          <div className={`${font.className} text-5xl`}>Convent</div>
        </Link>
        <Link href="https://wa.me/6285892643035">
        <div>Contact Us</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar