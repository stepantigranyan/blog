import { z } from 'zod';
import { PostOptionalAttributes } from '@/features/post/types';

export const PostSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, { message: 'Title must be at least 3 characters' })
        .max(100, { message: 'Title cannot exceed 100 characters' }),
    author: z
        .string()
        .trim()
        .min(2, { message: 'Author name must be at least 2 characters' }),
    description: z
        .string()
        .trim()
        .min(3, { message: 'Description must be at least 5 characters' })
        .max(250, { message: 'Description cannot exceed 250 characters' }),
    content: z
        .string()
        .trim()
        .min(10, { message: 'Content must be at least 10 characters' }),
});

export type PostInput = z.infer<typeof PostSchema>;
export type PostErrorTypes = Partial<
    Record<keyof PostInput, string[] | undefined>
>;

export type ActionState = {
    success: boolean;
    message?: string;
    values?: PostOptionalAttributes;
    errors?: PostErrorTypes;
};
