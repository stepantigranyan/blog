import { FC, Suspense } from 'react';

import AllPosts from '@/features/post/components/pages/AllPosts';
import PostListLoading from '@/features/post/components/list/PostListLoading';

import { PostSearchOptions } from '@/features/post/types';

interface PostsPageProps {
    searchParams: Promise<PostSearchOptions>;
}

const PostsPage: FC<PostsPageProps> = async ({ searchParams }) => {
    const query = await searchParams;

    return (
        <Suspense
            key={JSON.stringify(query)}
            fallback={<PostListLoading />}
        >
            <AllPosts query={query} />
        </Suspense>
    );
};

export default PostsPage;
