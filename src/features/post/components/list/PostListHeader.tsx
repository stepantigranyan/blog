'use client';

import PostListSearch from '@/features/post/components/list/PostListSearch';
import PostListFilter from '@/features/post/components/list/PostListFilter';

const PostListHeader = () => {
    return (
        <div className="flex items-center justify-between gap-x-2 mb-10">
            <PostListSearch />
            <PostListFilter />
        </div>
    );
};

export default PostListHeader;
