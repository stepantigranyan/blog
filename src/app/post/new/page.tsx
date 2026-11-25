'use client';

import PostForm from '@/features/post/components/form/PostForm';
import { ActionState } from '@/features/post/shemas';

const emptyData: ActionState = {
    success: false,
};

const CreatePostPage = () => {
    return <PostForm initialData={emptyData} key={Date()} />;
};

export default CreatePostPage;
