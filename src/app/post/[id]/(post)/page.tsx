import PostInfo from '@/features/post/components/info/PostInfo';
import { getPost } from '@/features/post/queries';
import { notFound } from 'next/navigation';

const PostInfoPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    return <PostInfo post={post} />;
};

export default PostInfoPage;
