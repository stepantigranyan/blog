'use client';

import { FC } from 'react';
import { useSearchParams } from 'next/navigation';

import {
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

import { getQueryObject } from '@/lib/utils';
import { ROUTES } from '@/routes';

interface PostPaginationButtonProps {
    next: number;
    to?: number;
    isActive?: boolean;
}

export const PostPaginationButton: FC<PostPaginationButtonProps> = ({
    next,
    to,
    isActive,
}) => {
    const searchParams = useSearchParams();
    const query = new URLSearchParams(searchParams);

    const page = getQueryObject(query).page ?? 1;

    query.set('page', to ? String(to) : String(Number(page) + next));

    return (
        <PaginationItem>
            <PaginationLink
                isActive={isActive}
                href={`${ROUTES.GET_POSTS}?${query}`}
            >
                {to ? to : Number(page) + next}
            </PaginationLink>
        </PaginationItem>
    );
};

interface PostPaginationArrowsProps {
    type: 'prev' | 'next';
}

export const PostPaginationArrows: FC<PostPaginationArrowsProps> = ({
    type,
}) => {
    const searchParams = useSearchParams();
    const query = new URLSearchParams(searchParams);

    const page = getQueryObject(query).page ?? 1;

    query.set(
        'page',
        type === 'next' ? String(Number(page) + 1) : String(Number(page) - 1)
    );

    if (type === 'next') {
        return (
            <PaginationItem>
                <PaginationNext href={`${ROUTES.GET_POSTS}?${query}`} />
            </PaginationItem>
        );
    } else {
        return (
            <PaginationItem>
                <PaginationPrevious href={`${ROUTES.GET_POSTS}?${query}`} />
            </PaginationItem>
        );
    }
};
