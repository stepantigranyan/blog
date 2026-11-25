import { FC, Suspense } from 'react';

import AllPosts from '@/features/post/components/pages/AllPosts';
import PostListLoading from '@/features/post/components/list/PostListLoading';

import { getQueryObject } from '@/lib/utils';
import { PostSearchOptions } from '@/features/post/types';

interface PostsPageProps {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        title?: string;
        author?: string;
    }>;
}

const PostsPage: FC<PostsPageProps> = async ({ searchParams }) => {
    const query = await searchParams;
    const srchParams = getQueryObject<PostSearchOptions>(
        new URLSearchParams(query)
    );

    return (
        <Suspense
            key={JSON.stringify(srchParams)}
            fallback={<PostListLoading />}
        >
            <AllPosts query={srchParams} />
        </Suspense>
    );
};

export default PostsPage;
