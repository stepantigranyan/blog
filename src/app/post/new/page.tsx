import PostForm from '@/features/post/components/form/PostForm';
import { ActionState } from '@/features/post/shemas';

const emptyData: ActionState = {
    success: false,
};

const CreatePostPage = async () => {
    return <PostForm initialData={emptyData} />;
};

export default CreatePostPage;
