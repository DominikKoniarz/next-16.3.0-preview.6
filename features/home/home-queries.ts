import "server-only";

import type { Post } from "@/features/home/home-types";
import { cache } from "react";

export const getPostsList = cache(async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = (await posts.json()) as Post[];
    return data;
});
