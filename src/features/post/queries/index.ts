import PostApi from '@/features/post/api';
import { PostSearchOptions } from '@/features/post/types';

export const getAllPosts = async (query: PostSearchOptions) => {
    return await PostApi.getAll(query);
};

export const getPost = async (id: string) => {
    return await PostApi.getOne(id);
};
