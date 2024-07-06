import prisma from "@/lib/db";
import PostCard from "./post-card";

export default async function PostsList(){
  const posts = await prisma.post.findMany();
    
    return (
      <>
        <ul>
          {posts.map((post:any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
        <button className="bg-slate-500 text-white hover:bg-slate-400 py-5 w-full">
          Load More
        </button>
      </>
        
    );
}