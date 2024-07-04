import Link from "next/link";
// import prisma from "@/lib/db";

export default async function PostsList(){
    const response= await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    // const posts = await prisma.post.findMany();
    return (
        <ul>
          {data.posts.map((post:any) => (
            <li key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
    );
}