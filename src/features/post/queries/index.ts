import PostApi from '@/features/post/api';
import { PostSearchOptions } from '@/features/post/types';

export const getAllPosts = async (
    page: number,
    limit: number,
    options?: PostSearchOptions
) => {
    return await PostApi.getAll(page, limit, options);
};

export const getPost = async (id: string) => {
    return await PostApi.getOne(id);
};
