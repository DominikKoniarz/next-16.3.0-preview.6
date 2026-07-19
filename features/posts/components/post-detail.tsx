import { getPost } from "@/features/posts/posts-queries";
import { cacheLife } from "next/cache";

export async function PostDetail({ id }: { id: string }) {
    "use cache";

    const post = await getPost(id);

    await new Promise((resolve) => setTimeout(resolve, 500));

    cacheLife("minutes");

    return (
        <article className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-sm text-gray-400">{post.body}</p>
        </article>
    );
}

export function PostDetailSkeleton() {
    return (
        <div className="animate-pulse flex flex-col gap-2">
            <div className="bg-gray-200 rounded-md h-14 w-3/4" />
            <div className="bg-gray-200 rounded-md h-10 w-full" />
        </div>
    );
}
