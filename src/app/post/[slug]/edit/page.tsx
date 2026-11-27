import { FC } from 'react';
import { notFound } from 'next/navigation';

import PostForm from '@/features/post/components/form/PostForm';

import { getPost } from '@/features/post/queries';
import { ActionState } from '@/features/post/shemas';
import { Metadata } from 'next';

interface EditPostPageProps {
    params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
    title: 'Edit',
}

const EditPostPage: FC<EditPostPageProps> = async ({ params }) => {

    const { slug } = await params;
    const id = slug.split('_')[0]

    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    const data: ActionState = {
        values: post,
        success: false,
    };

    return <PostForm slug={slug} initialData={data} key={Date.now()}/>;
};

export default EditPostPage;
