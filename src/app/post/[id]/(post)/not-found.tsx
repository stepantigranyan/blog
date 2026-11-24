'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from '@/components/ui/empty';
import { ROUTES } from '@/routes';

const EditPostNotFound = () => {
    const params = useParams();
    const postId = params?.id;

    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>404 - Not Found</EmptyTitle>
                <EmptyDescription>
                    We couldn&#39;t find a post with ID {postId}. It may have
                    been deleted or the link might be incorrect.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Link
                    href={ROUTES.HOME}
                    className="mt-6 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                    Back to all posts
                </Link>
            </EmptyContent>
        </Empty>
    );
};

export default EditPostNotFound;
