'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PostSchema, ActionState } from '@/features/post/shemas';
import PostApi from '@/features/post/api';

export async function createPost(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const rawData = {
        title: formData.get('title') as string,
        author: formData.get('author') as string,
        description: formData.get('description') as string,
        content: formData.get('content') as string,
    };

    const parsed = PostSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            success: false,
            message: 'Please fix the highlighted errors below.',
            values: rawData,
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    try {
        const data = (await PostApi.create(parsed.data))!;

        return {
            success: true,
            message: 'Database success',
            values: data,
        };
    } catch (error) {
        return {
            success: false,
            message: 'Database error: Failed to create post.',
            values: rawData,
        };
    }
}

export async function editPost(
    postId: string,
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const rawData = {
        title: formData.get('title') as string,
        author: formData.get('author') as string,
        description: formData.get('description') as string,
        content: formData.get('content') as string,
    };

    const parsed = PostSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            success: false,
            message: 'Please fix the highlighted errors below.',
            values: rawData,
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    try {
        const data = (await PostApi.edit(postId, parsed.data))!;
        return {
            success: true,
            message: 'Database success',
            values: data,
        };
    } catch (error) {
        return {
            success: false,
            message: 'Database error: Failed to update post.',
            values: rawData,
        };
    }
}

export const deletePost = async (id: string) => {
    try {
        await PostApi.delete(id);
        return { success: true };
    } catch (error) {
        return { success: false };
    }
};
