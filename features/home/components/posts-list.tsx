import Post, { PostSkeleton } from "@/features/home/components/post";
import { getPostsList } from "@/features/home/home-queries";

export default async function PostsList() {
    const posts = await getPostsList();

    await new Promise((resolve) => setTimeout(resolve, 500));

    return (
        <ul className="flex w-full flex-col gap-4">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </ul>
    );
}

export function PostsListSkeleton() {
    return (
        <ul className="flex w-full flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
                <PostSkeleton key={index} />
            ))}
        </ul>
    );
}
