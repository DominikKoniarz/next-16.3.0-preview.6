import "server-only";

import type { Comment, Post } from "@/features/posts/posts-types";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getPostsList = cache(async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = (await posts.json()) as Post[];
    return data;
});

export const getPost = cache(async (id: string) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) notFound();

    return (await response.json()) as Post;
});

export const getPostComments = cache(async (id: string) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if (!response.ok) notFound();

    return (await response.json()) as Comment[];
});
