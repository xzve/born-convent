import Link from 'next/link';
import React from 'react'

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({title = "", tags = false}) => {
  return (
   <header className='py-14 px-4 mb-12 text-center border-b'>
    <h2 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>
      {title}
    </h2>

    {tags && (
      <div className='text-xs mt-2'>
        <Link href="/tag">#tag</Link>
      </div>
    )}
   </header>
  )
}

export default Header