'use client'

import { useActionState } from "react";
import { createPost, editPost } from "@/features/post/actions";
import { ActionState, PostInput } from "@/features/post/shemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { redirect } from 'next/navigation';
import { ROUTES } from '@/routes';

interface PostFormProps {
    postId?: string;
    initialData?: PostInput;
}

const initialState: ActionState = {
    success: false,
    errors: {},
};

export function PostForm({ postId, initialData }: PostFormProps) {
    const action = postId ? editPost.bind(null, postId) : createPost;

    const formAct = async (e: FormData) => {
            const actionState = await action(initialState, e);
            if (!actionState.success) {
                return
            }
            redirect(ROUTES.HOME);
    }

    const [state, formAction, isPending] = useActionState(formAct, initialState);

    return (
        <Card className="max-w-xl mx-auto">
            <CardHeader>
                <CardTitle>{postId ? "Edit Post" : "Create New Post"}</CardTitle>
                <CardDescription>
                    {postId
                        ? "Update the post details below and save your changes."
                        : "Fill out the fields below to publish a new post."}
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
                            defaultValue={initialData?.title ?? ""}
                            aria-invalid={!!state.errors?.title}
                        />
                        {state.errors?.title && (
                            <p className="text-sm font-medium text-destructive">
                                {state.errors.title}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author">Author</Label>
                        <Input
                            id="author"
                            name="author"
                            placeholder="Author name"
                            defaultValue={initialData?.author ?? ""}
                            aria-invalid={!!state.errors?.author}
                        />
                        {state.errors?.author && (
                            <p className="text-sm font-medium text-destructive">
                                {state.errors.author}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            name="description"
                            placeholder="Brief summary (optional)"
                            defaultValue={initialData?.description ?? ""}
                            aria-invalid={!!state.errors?.description}
                        />
                        {state.errors?.description && (
                            <p className="text-sm font-medium text-destructive">
                                {state.errors.description}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                            id="content"
                            name="content"
                            rows={6}
                            placeholder="Write your post content here..."
                            defaultValue={initialData?.content ?? ""}
                            aria-invalid={!!state.errors?.content}
                        />
                        {state.errors?.content && (
                            <p className="text-sm font-medium text-destructive">
                                {state.errors.content}
                            </p>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="flex justify-end gap-2 pt-4">
                    <Button type="submit" disabled={isPending}>
                        {isPending
                            ? "Saving..."
                            : postId
                                ? "Save Changes"
                                : "Create Post"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}