import { FC } from 'react';
import { notFound } from 'next/navigation';

import PostForm from '@/features/post/components/form/PostForm';

import { getPost } from '@/features/post/queries';
import { ActionState } from '@/features/post/shemas';

interface EditPostPageProps {
    params: Promise<{ id: string }>;
}

const EditPostPage: FC<EditPostPageProps> = async ({ params }) => {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    const data: ActionState = {
        values: post,
        success: false,
    };

    return (
        <PostForm postId={post.id} initialData={data} key={Date()} />
    );
};

export default EditPostPage;
