import PostListSearch from '@/features/post/components/list/PostListSearch';

const PostsListLayout = ({ children }: LayoutProps<'/'>) => {
    return (
        <main className="relative min-h-[calc(100vh-80px)]">
            <PostListSearch />
            {children}
        </main>
    );
};

export default PostsListLayout;
