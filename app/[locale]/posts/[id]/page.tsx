import {
    PostDetail,
    PostDetailSkeleton,
} from "@/features/posts/components/post-detail";
import {
    PostComments,
    PostCommentsSkeleton,
} from "@/features/posts/components/post-comments";
import { Suspense } from "react";

export const generateStaticParams = async () => {
    // only generate the first 10 posts
    return Array.from({ length: 10 }, (_, index) => ({
        locale: "pl",
        id: (index + 1).toString(),
    }));
};

export default function PostPage({
    params,
}: PageProps<"/[locale]/posts/[id]">) {
    return (
        <main className="flex px-16 py-8 flex-col w-full gap-4 max-w-3xl mx-auto">
            <Suspense fallback={<PostDetailSkeleton />}>
                {params.then(({ id }) => (
                    <PostDetail id={id} />
                ))}
            </Suspense>

            <hr className="w-full border-t border-gray-200/50 my-4" />

            <Suspense fallback={<PostCommentsSkeleton />}>
                {params.then(({ id }) => (
                    <PostComments id={id} />
                ))}
            </Suspense>
        </main>
    );
}
