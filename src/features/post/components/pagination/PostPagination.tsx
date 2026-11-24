'use client';

import { FC } from 'react';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationEllipsis,
} from '@/components/ui/pagination';

import {
    PostPaginationButton,
    PostPaginationArrows,
} from '@/features/post/components/pagination/PostPaginationButton';

interface PostPaginationProps {
    pages: number;
    currentPage: number;
    limit: number;
}

const PostPagination: FC<PostPaginationProps> = ({
    pages,
    currentPage,
}) => {
    return (
        <div>
            <Pagination>
                <PaginationContent className="grid grid-cols-[auto_1fr_auto]">
                    <div>
                        {currentPage > 1 && (
                            <PostPaginationArrows type="prev" />
                        )}
                    </div>

                    <div className="flex items-center gap-x-1">
                        {currentPage > 3 && (
                            <PostPaginationButton next={0} to={1} />
                        )}

                        {currentPage > 4 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {currentPage > 2 && <PostPaginationButton next={-2} />}

                        {currentPage > 1 && <PostPaginationButton next={-1} />}

                        <PostPaginationButton isActive={true} next={0} />

                        {currentPage < pages && (
                            <PostPaginationButton next={1} />
                        )}

                        {currentPage < pages - 1 && (
                            <PostPaginationButton next={2} />
                        )}

                        {currentPage < pages - 3 && <PaginationEllipsis />}

                        {currentPage < pages - 2 && (
                            <PostPaginationButton next={0} to={pages} />
                        )}
                    </div>

                    <div>
                        {currentPage < pages && (
                            <PostPaginationArrows type="next" />
                        )}
                    </div>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PostPagination;
