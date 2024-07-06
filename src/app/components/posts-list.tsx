import Link from "next/link";
import prisma from "@/lib/db";
import PostCard from "./post-card";

export default async function PostsList(){
  const posts = await prisma.post.findMany();
    
    return (
        <ul>
          {posts.map((post:any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
    );
}