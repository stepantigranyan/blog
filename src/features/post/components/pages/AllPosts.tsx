import { FC } from 'react';

import PostList from '@/features/post/components/list/PostList';
import PostPagination from '@/features/post/components/pagination/PostPagination';

import { PostSearchOptions } from '@/features/post/types';

import { LIMIT } from '@/lib/consts';
import { getAllPosts } from '@/features/post/queries';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/routes';

interface AllPostsProps {
    query: PostSearchOptions;
}

const AllPosts: FC<AllPostsProps> = async ({ query }) => {
    const { page, limit, sort, content } = query;

    const searchOptions: PostSearchOptions = {};

    if (isNaN(Number(page))) {
        searchOptions.page = '1';
    } else if (Number(page) >= 1) {
        searchOptions.page = page;
    } else {
        redirect(`${ROUTES.HOME}?page=1`)
    }

    if (isNaN(Number(limit))) {
        searchOptions.limit = String(LIMIT);
    } else if (Number(limit) >= 1) {
        searchOptions.limit = limit;
    } else {
        redirect(`${ROUTES.HOME}?page=${searchOptions.page}`);
    }


    if (content === undefined) {
        searchOptions.content = '';
    } else if (content.trim() === '') {
        redirect(`${ROUTES.HOME}?page=${searchOptions.page}&limit=${searchOptions.limit}`);
    } else {
        searchOptions.content = content;
    }

    if (sort === undefined) {
        searchOptions.sort = 'DATE_DESC';
    } else {
        if (sort === "DATE_DESC" || "DESC" || "DATE_ASC" || "ASC" ) {
            searchOptions.sort = sort;
        } else {
            redirect(`${ROUTES.HOME}?page=${searchOptions.page}&limit=${searchOptions.limit}?conent=${searchOptions.content}`);
        }
    }

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
                        currentPage={+searchOptions.page!}
                    />
                )}
            </div>
        </>
    );
};

export default AllPosts;
