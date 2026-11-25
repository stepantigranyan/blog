import { FC } from 'react';

import PostList from '@/features/post/components/list/PostList';
import PostPagination from '@/features/post/components/pagination/PostPagination';

import { PostSearchOptions } from '@/features/post/types';

import { LIMIT } from '@/lib/consts';
import { getAllPosts } from '@/features/post/queries';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/routes';
import { sortTransform } from '@/features/post/utils';

interface AllPostsProps {
    query: PostSearchOptions;
}

const AllPosts: FC<AllPostsProps> = async ({ query }) => {
    const { page, limit, sort, content } = query;

    const searchOptions: PostSearchOptions = {

        page: isNaN(Number(page))
            ? '1'
            : Number(page) < 1
              ? redirect(`${ROUTES.HOME}?page=1`)
              : page,
        limit: isNaN(Number(limit))
            ? String(LIMIT)
            : Number(query.limit) < 1
              ? redirect(`${ROUTES.HOME}?page=1`)
              : limit,
        sort: sortTransform(sort) || redirect(`${ROUTES.HOME}?sort=DATE_DESC`),
        content: content
    };

    const allPosts = await getAllPosts(searchOptions);


    if (!allPosts) {
        return;
    }

    return (
        <>
            <PostList data={allPosts.data} />
            <div className="relative mt-5 left-1/2 -translate-x-1/2 xl:absolute xl:bottom-10">
                {allPosts.allPages > 1 && allPosts.data.length > 0 && (
                    <PostPagination
                        allPages={allPosts.allPages}
                        currentPage={+searchOptions.page}
                    />
                )}
            </div>
        </>
    );
};

export default AllPosts;
