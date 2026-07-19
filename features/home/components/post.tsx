import type { Post } from "@/features/home/home-types";
import Link from "next/link";

export default function Post({ post }: { post: Post }) {
    return (
        <li>
            <Link href={`/posts/${post.id}`} className="flex flex-col gap-2">
                <h2 className="text-lg line-clamp-1 leading-5.5 font-bold">
                    {post.title}
                </h2>
                <p className="line-clamp-2 text-sm text-gray-400">
                    {post.body}
                </p>
            </Link>
        </li>
    );
}

export function PostSkeleton() {
    return (
        <li className="animate-pulse flex flex-col gap-2">
            <h2 className="bg-gray-200 rounded-md h-5.5 w-full"></h2>
            <p className="bg-gray-200 rounded-md h-10 w-full"></p>
        </li>
    );
}
