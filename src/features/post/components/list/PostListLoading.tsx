import { FC, ReactNode } from 'react';

interface PostCardLoadingProps {
    children: ReactNode;
}

const PostListLoading: FC<PostCardLoadingProps> = ({ children }) => {
    return (
        <div className="size-full grid grid-cols-1 grid-rows-1 gap-4 justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {children}
        </div>
    );
};

export default PostListLoading;
