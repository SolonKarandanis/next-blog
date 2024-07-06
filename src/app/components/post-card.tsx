import Link from 'next/link'
import {FC} from 'react'

interface Props{
    post:any
}

const PostCard:FC<Props> = ({post}) => {
  return (
    <li className="mb-3">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  )
}

export default PostCard