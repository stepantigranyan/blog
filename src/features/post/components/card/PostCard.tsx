import { FC } from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';

import type { PostAttributes } from '@/features/post/types';
import { formatToLongDate } from '@/lib/utils';
import { ROUTES } from '@/routes';

interface PostCardProps extends Omit<PostAttributes, 'content' | 'updatedAt'> {}

const PostCard: FC<PostCardProps> = ({
    id,
    title,
    description,
    author,
    createdAt,
}) => {
    return (
        <Card className="min-h-70 flex flex-col justify-between w-full transition-shadow hover:shadow-md">
            <div className="h-full flex flex-col justify-between">
                <CardHeader className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarIcon className="size-3.5" />
                        <span>{formatToLongDate(createdAt)}</span>
                    </div>
                    <CardTitle className="cursor-pointer text-xl leading-snug">
                        <Link
                            href={ROUTES.GET_POST(id)}
                            className="line-clamp-3"
                        >
                            {title}
                        </Link>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
                        {description}
                    </CardDescription>
                </CardContent>
            </div>

            <CardFooter className="border-t pt-4">
                <div className="flex items-center gap-2.5">
                    <span className="text-sm font-medium">{author}</span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PostCard;
