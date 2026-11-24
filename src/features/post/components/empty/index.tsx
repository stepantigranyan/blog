'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from '@/components/ui/empty';

import { getQueryObject } from '@/lib/utils';
import { ROUTES } from '@/routes';
import { Button } from '@/components/ui/button';

const EmptyPostsList = () => {
    const searchParams = useSearchParams();

    console.log(getQueryObject(searchParams));

    return (
        <Empty className="h-full">
            <EmptyHeader>
                <EmptyTitle>No Posts Found</EmptyTitle>
                <EmptyDescription className="max-w-xs text-pretty">
                    The post you&#39;re looking for doesn&#39;t exist or may
                    have been deleted.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button variant="default">
                    <Link href={ROUTES.GET_POSTS}>See all posts</Link>
                </Button>
            </EmptyContent>
        </Empty>
    );
};

export default EmptyPostsList;
