'use client';

import { FC } from 'react';
import PostCard from '@/features/post/components/card/PostCard';
import EmptyPostsList from '@/features/post/components/empty';

import { PostAttributes } from '@/features/post/types';

interface PostListProps {
    data: PostAttributes[];
}

const PostList: FC<PostListProps> = ({ data }) => {
    if (data === undefined || data.length === 0) {
        return <EmptyPostsList />;
    }

    return (
        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 sm:justify-self-center lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    author={post.author}
                    createdAt={post.createdAt}
                />
            ))}
        </div>
    );
};

export default PostList;
