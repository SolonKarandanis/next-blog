import Link from 'next/link'
import {FC} from 'react'

interface Props{
    post:any
}

const PostCard:FC<Props> = ({post}) => {
  return (
    <li className=" bordermy-4 mb-3 bg-slate-100 p-10">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  )
}

export default PostCard