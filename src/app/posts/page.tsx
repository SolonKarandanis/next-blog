import Link from 'next/link';
import React from 'react'

const PostsPage = async () => {
    const response= await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return (
        <main className='text-center pt-16 px-5'>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
               All posts
            </h1>
            <ul>
                {
                    data.posts.map((post:any) =>(
                        <li key={post.id} className='mb-3'>
                            <Link href={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default PostsPage