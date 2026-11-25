'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { PaginationItem } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import { ROUTES } from '@/routes';

interface PostPaginationButtonProps {
    page: number;
    isActive?: boolean;
}

export const PostPaginationButton: FC<PostPaginationButtonProps> = ({
    page,
    isActive,
}) => {
    const router = useRouter();
    const searchParams = new URLSearchParams(useSearchParams().toString());

    searchParams.set('page', String(page));

    const handleChangePage = () => {
        router.replace(`${ROUTES.HOME}?${searchParams}`);
    };

    return (
        <PaginationItem>
            <Button
                size="icon-sm"
                variant={isActive ? 'outline' : 'ghost'}
                onClick={handleChangePage}
            >
                {page}
            </Button>
        </PaginationItem>
    );
};

interface PostPaginationArrowsProps {
    type: 'prev' | 'next';
    page: number;
}

export const PostPaginationArrows: FC<PostPaginationArrowsProps> = ({
    type,
    page,
}) => {
    const router = useRouter();
    const searchParams = new URLSearchParams(useSearchParams().toString());

    searchParams.set('page', String(page));

    const handleChangePage = () => {
        router.replace(`${ROUTES.HOME}?${searchParams}`);
    };

    if (type === 'next') {
        return (
            <PaginationItem>
                <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={handleChangePage}
                >
                    <ArrowRight />
                </Button>
            </PaginationItem>
        );
    } else {
        return (
            <PaginationItem>
                <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={handleChangePage}
                >
                    <ArrowLeft />
                </Button>
            </PaginationItem>
        );
    }
};
