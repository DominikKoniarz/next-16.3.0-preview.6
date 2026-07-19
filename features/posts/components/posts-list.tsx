import type { Post as PostType } from "@/features/posts/posts-types";
import { getPostsList } from "@/features/posts/posts-queries";
import Link from "next/link";
import { cacheLife } from "next/cache";

export async function PostsList() {
    "use cache";

    const posts = await getPostsList();

    await new Promise((resolve) => setTimeout(resolve, 500));

    cacheLife("minutes");

    return (
        <ul className="flex w-full flex-col gap-4">
            {posts.map((post, index) => (
                <Post key={post.id} post={post} index={index} />
            ))}
        </ul>
    );
}

export function PostsListSkeleton() {
    return (
        <ul className="flex w-full flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
                <PostSkeleton key={index} />
            ))}
        </ul>
    );
}

function Post({ post, index }: { post: PostType; index: number }) {
    return (
        <li>
            <Link
                href={`/en/posts/${post.id}`}
                className="flex flex-col gap-2"
                prefetch={index % 2 === 0}
            >
                <h2 className="text-lg line-clamp-1 leading-5.5 font-bold">
                    {index}. {post.title}
                </h2>
                <p className="line-clamp-2 text-sm text-gray-400">
                    {post.body}
                </p>
            </Link>
        </li>
    );
}

function PostSkeleton() {
    return (
        <li className="animate-pulse flex flex-col gap-2">
            <h2 className="bg-gray-200 rounded-md h-5.5 w-full"></h2>
            <p className="bg-gray-200 rounded-md h-10 w-full"></p>
        </li>
    );
}
