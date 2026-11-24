'use client';

import { FC, useActionState } from 'react';
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
import { ActionState } from '@/features/post/shemas';

import { ROUTES } from '@/routes';

interface PostFormProps {
    postId?: string;
    initialData: ActionState;
}

const PostForm: FC<PostFormProps> = ({ postId, initialData }) => {
    const action = postId ? editPost.bind(null, postId) : createPost;
    const [state, formAction, isPending] = useActionState(action, initialData);

    if (state.success) {
        redirect(postId ? ROUTES.GET_POST(postId) : ROUTES.GET_POSTS);
    }

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

                <form action={formAction}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter post title"
                                defaultValue={state?.values?.title}
                                aria-invalid={!!state?.errors?.title}
                            />
                            {state?.errors?.title && (
                                <p className="text-sm font-medium text-destructive">
                                    {state?.errors.title}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="author">Author</Label>
                            <Input
                                id="author"
                                name="author"
                                placeholder="Author name"
                                defaultValue={state?.values?.author}
                                aria-invalid={!!state?.errors?.author}
                            />
                            {state?.errors?.author && (
                                <p className="text-sm font-medium text-destructive">
                                    {state?.errors.author}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Brief summary"
                                defaultValue={state?.values?.description ?? ''}
                                aria-invalid={!!state?.errors?.description}
                            />
                            {state?.errors?.description && (
                                <p className="text-sm font-medium text-destructive">
                                    {state?.errors.description}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Write your post content here..."
                                defaultValue={state?.values?.content}
                                aria-invalid={!!state?.errors?.content}
                                className="min-h-30"
                            />
                            {state?.errors?.content && (
                                <p className="text-sm font-medium text-destructive">
                                    {state?.errors.content}
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
                                        ? ROUTES.GET_POST(postId)
                                        : ROUTES.GET_POSTS
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
