import Link from 'next/link'
import React from 'react'
import { Post } from '../utils/interface';
import { Jersey_25, VT323 } from 'next/font/google'

interface Props {
  post: Post;
}

const font = Jersey_25({weight: "400", subsets: ["latin"]})
const dateFont = VT323({weight: "400", subsets: ["latin"]})

const PostComponents = ({post}: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${font.className} text-3xl`}>{post?.title}</h2>
        <p className={`${dateFont.className} my-2 text-red-400`}>Uploaded at {new Date(post?.publishedAt).toDateString()}</p>
        <p className='mb-4 line-clamp-2'>{post?.excerpt}</p>
      </Link>

      {/* TAGS */}

      <div>
        {post?.tags?.map((tag) => (
          <span key={tag?._id} className='mr-2 p-1 rounded-sm text-sm lowercase'>#{tag?.name}</span>
        ))}
      </div>


    </div>
  )
}

export default PostComponents

const cardStyle = `
mb-8
p-4
border
border-zinc-800
rounded-md
shadow-sm
shadow-gray-950
hover: shadow-md
bg-neutral-900
hover:bg-gray-800
hover:text-white
`