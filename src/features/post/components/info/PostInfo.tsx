'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { ArrowLeft, Calendar, Clock, Pencil, User } from 'lucide-react';

import { ROUTES } from '@/routes';

import { readingTimeMinutes, formatToLongDate } from '@/lib/utils';

import DeletePostDialog from '@/features/post/components/form/DeletePostDialog';
import { PostAttributes } from '@/features/post/types';

interface PostInfoProps {
    post: PostAttributes;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
    const router = useRouter();

    const handleBack = () => {
        const prevPage = sessionStorage.getItem('prevPage');

        if (!prevPage) {
            router.push(`${ROUTES.HOME}`);
            return;
        }

        sessionStorage.removeItem('prev_page');
        router.push(`${ROUTES.HOME}?${prevPage}`);
    };

    return (
        <main className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-between">
                <Button
                    className="cursor-pointer"
                    variant="ghost"
                    size="sm"
                    onClick={handleBack}
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden sm:block">Back to Posts</span>
                </Button>

                <div className="flex items-center gap-1">
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        size="sm"
                    >
                        <Link
                            href={ROUTES.EDIT_POST(post.id)}
                            className="inline-flex items-center gap-2"
                        >
                            <Pencil className="h-4 w-4" />
                            <span className="hidden sm:block">Edit Post</span>
                        </Link>
                    </Button>
                    <DeletePostDialog id={post.id} />
                </div>
            </div>

            <Card>
                <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">Article</Badge>
                        <span className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3.5 w-3.5" />
                            {formatToLongDate(post.createdAt)}
                        </span>
                        <span className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            {readingTimeMinutes(post.content)} min read
                        </span>
                    </div>

                    <CardTitle className="text-xl font-bold tracking-tight">
                        {post.title}
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed">
                        {post.description}
                    </CardDescription>

                    <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>
                            <strong className="font-medium text-foreground">
                                By {post.author}
                            </strong>
                        </span>
                    </div>
                </CardHeader>

                <Separator />

                <CardContent className="pt-6">
                    <div className="space-y-4 whitespace-pre-line text-sm leading-7 text-foreground/90">
                        {post.content}
                    </div>
                </CardContent>

                <CardFooter className="flex justify-end py-4 text-xs text-muted-foreground">
                    <span>Published by {post.author}</span>
                </CardFooter>
            </Card>
        </main>
    );
};

export default PostInfo;
