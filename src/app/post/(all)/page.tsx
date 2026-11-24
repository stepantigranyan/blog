import { FC } from 'react';
import PostList from '@/features/post/components/list/PostList';
import PostPagination from '@/features/post/components/pagination/PostPagination';
import { getAllPosts } from '@/features/post/queries';

import { LIMIT } from '@/lib/consts';
import { PostAttributes } from '@/features/post/types';

export const instant = false;

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

    let page: number;
    let limit: number;
    let allPosts: { data: PostAttributes[]; allPages: number };

    console.log('before');

    if (query.title) {
        page = Number(query.page) || 1;
        limit = Number(query.limit) || LIMIT;
        allPosts = (await getAllPosts(page, limit, { title: query.title }))!;
    } else if (query.author) {
        page = Number(query.page) || 1;
        limit = Number(query.limit) || LIMIT;
        allPosts = (await getAllPosts(page, limit, { author: query.author }))!;
    } else {
        page = Number(query.page) || 1;
        limit = Number(query.limit) || LIMIT;
        allPosts = (await getAllPosts(page, limit))!;
    }

    console.log('after');

    return (
        <div key={`${page}-${limit}`}>
            <PostList data={allPosts?.data} />
            <div className="relative mt-5 left-1/2 -translate-x-1/2 xl:absolute xl:bottom-10">
                {allPosts.allPages > 1 && (
                    <PostPagination
                        pages={allPosts.allPages}
                        currentPage={page}
                        limit={limit}
                    />
                )}
            </div>
        </div>
    );
};

export default PostsPage;
