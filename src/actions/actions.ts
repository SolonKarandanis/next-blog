"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData){
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    revalidatePath("/posts");
}