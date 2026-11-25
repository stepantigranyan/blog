import PostCardLoading from '@/features/post/components/card/PostCardLoading';

const PostListLoading = () => {
    return (
        <div className="size-full grid grid-cols-1 grid-rows-1 gap-4 justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <PostCardLoading />
            <PostCardLoading />
            <PostCardLoading />
            <PostCardLoading />
            <PostCardLoading />
            <PostCardLoading />
            <PostCardLoading />
            <PostCardLoading />
        </div>
    );
};

export default PostListLoading;
