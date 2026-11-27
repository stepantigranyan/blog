'use client';

import { FC, startTransition, useActionState, useEffect, useRef, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { createPost, editPost } from '@/features/post/actions';
import { ActionState, PostErrorTypes } from '@/features/post/shemas';

import { ROUTES } from '@/routes';
import { createSlug } from '@/lib/utils';

interface PostFormProps {
    slug?: string;
    initialData: ActionState;
}

const PostForm: FC<PostFormProps> = ({ slug, initialData }) => {
    const postId = slug?.split('_')[0];
    const formRef = useRef(null)
    const [state, formAction, isPending] = useActionState(
        async (prevState: ActionState, payload: FormData | 'RESET') => {
            if (payload === 'RESET') {
                return initialData;
            }

            if (postId) {
                return editPost(postId, prevState, payload);
            }

            return createPost(prevState, payload);
        },
        initialData
    );

    const resetForm = () => {
        startTransition(() => {
            formAction('RESET');
        });
        formRef.current?.reset();
    };

    const [errors, setErrors] = useState<PostErrorTypes | undefined>(undefined);

    useEffect(() => {
        setErrors(state?.errors ?? {});
    }, [state]);

    useEffect(() => {
        return () => {
            resetForm()
        }
    }, []);

    if (state.success) {
        redirect(postId ? ROUTES.GET_POST(createSlug(state.values!.title, postId)) : ROUTES.HOME);
    }

    const handleInput = (name: string) => {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    return (
        <div className="mx-auto max-w-xl px-4">
            <Card className="flex flex-col gap-y-5 min-h-100">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-lg font-bold">
                            {postId ? 'Edit Post' : 'Create New Post'}
                        </h2>
                    </CardTitle>
                    <CardDescription>
                        {postId
                            ? 'Update the post details below and save your changes.'
                            : 'Fill out the fields below to publish a new post.'}
                    </CardDescription>
                </CardHeader>

                <form action={formAction} ref={formRef}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                onChange={() => handleInput('title')}
                                id="title"
                                name="title"
                                placeholder="Enter post title"
                                defaultValue={state?.values?.title}
                                aria-invalid={!!errors?.title}
                            />
                            {errors?.title && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="author">Author</Label>
                            <Input
                                onChange={() => handleInput('author')}
                                id="author"
                                name="author"
                                placeholder="Author name"
                                defaultValue={state?.values?.author}
                                aria-invalid={!!errors?.author}
                            />
                            {errors?.author && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.author}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                onChange={() => handleInput('description')}
                                id="description"
                                name="description"
                                placeholder="Brief summary"
                                defaultValue={state?.values?.description ?? ''}
                                aria-invalid={!!errors?.description}
                            />
                            {errors?.description && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                onChange={() => handleInput('content')}
                                id="content"
                                name="content"
                                placeholder="Write your post content here..."
                                defaultValue={state?.values?.content}
                                aria-invalid={!!errors?.content}
                                className="min-h-30"
                            />
                            {errors?.content && (
                                <p className="text-sm font-medium text-destructive">
                                    {errors.content}
                                </p>
                            )}
                        </div>
                    </CardContent>

                    <CardFooter className="flex justify-between md:justify-end md:gap-2 mt-4">
                        <Button
                            variant="ghost"
                            disabled={isPending}
                            type="reset"
                        >
                            <Link
                                href={
                                    postId
                                        ? ROUTES.GET_POST(slug)
                                        : ROUTES.HOME
                                }
                            >
                                Cancel
                            </Link>
                        </Button>
                        <Button
                            type="submit"
                            variant="default"
                            disabled={isPending}
                        >
                            {isPending
                                ? 'Saving...'
                                : postId
                                  ? 'Save Changes'
                                  : 'Publish Post'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default PostForm;
