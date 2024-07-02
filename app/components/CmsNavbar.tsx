import Link from 'next/link'
import { Jersey_15 } from 'next/font/google'

const font = Jersey_15({ weight: "400", subsets: ["latin"]});

const CmsNavbar = () => {
  return (
    <div className='flex justify-between items-center py-1 px-5'>
      <Link href="/">
        <div>Back</div>
      </Link>
        <div className={`${font.className} text-5xl`}>Convent</div>
    </div>
  )
}

export default CmsNavbar