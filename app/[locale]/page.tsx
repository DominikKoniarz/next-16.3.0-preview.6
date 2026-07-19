import {
    PostsList,
    PostsListSkeleton,
} from "@/features/posts/components/posts-list";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-8 px-16   sm:items-start">
                <h1 className="text-2xl font-bold mb-4">Posts</h1>
                <Suspense fallback={<PostsListSkeleton />}>
                    <PostsList />
                </Suspense>
            </main>
        </div>
    );
}
