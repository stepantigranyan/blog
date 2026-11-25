import PostListHeader from '@/features/post/components/list/PostListHeader';
import { Suspense } from 'react';

const PostsListLayout = ({ children }: LayoutProps<'/'>) => {
    return (
        <main className="relative min-h-[calc(100vh-80px)]">
            <Suspense fallback={null}>
                <PostListHeader />
            </Suspense>
            {children}
        </main>
    );
};

export default PostsListLayout;
