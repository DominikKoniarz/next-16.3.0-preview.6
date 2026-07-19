import "server-only";

import { cache } from "react";
import type { Post } from "@/features/posts/posts-types";

export const getPostsList = cache(async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = (await posts.json()) as Post[];
    return data;
});
