import { getPostComments } from "@/features/posts/posts-queries";
import { cacheLife } from "next/cache";

export async function PostComments({ id }: { id: string }) {
    "use cache";

    const comments = await getPostComments(id);

    await new Promise((resolve) => setTimeout(resolve, 500));

    cacheLife("minutes");

    return (
        <div>
            <h2 className="text-lg font-bold mb-2">
                Comments ({comments.length})
            </h2>
            <ul className="flex flex-col gap-2">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <h3 className="text-md font-bold">{comment.name}</h3>
                        <p className="text-sm text-gray-400">{comment.body}</p>
                        <p className="text-xs text-gray-400 italic">
                            {comment.email}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function PostCommentsSkeleton() {
    return (
        <div className="animate-pulse flex flex-col gap-2">
            <div className="bg-gray-200 rounded-md h-6 w-3/4 mb-2" />
            <ul className="flex flex-col gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <li
                        key={index}
                        className="bg-gray-200 rounded-md h-20 w-full"
                    />
                ))}
            </ul>
        </div>
    );
}
