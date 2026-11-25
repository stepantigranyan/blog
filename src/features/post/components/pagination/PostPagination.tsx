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
    allPages: number;
    currentPage: number;
}

const PostPagination: FC<PostPaginationProps> = ({ allPages, currentPage }) => {
    return (
        <div>
            <Pagination>
                <PaginationContent className="grid grid-cols-[auto_1fr_auto]">
                    <div>
                        {currentPage > 1 && (
                            <PostPaginationArrows
                                type="prev"
                                page={currentPage - 1}
                            />
                        )}
                    </div>

                    <div className="flex items-center gap-x-1">
                        {currentPage > 2 && <PostPaginationButton page={1} />}

                        {currentPage > 3 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {currentPage > 1 && (
                            <PostPaginationButton page={currentPage - 1} />
                        )}

                        <PostPaginationButton
                            isActive={true}
                            page={currentPage}
                        />

                        {currentPage < allPages && (
                            <PostPaginationButton page={currentPage + 1} />
                        )}

                        {currentPage < allPages - 2 && <PaginationEllipsis />}

                        {currentPage < allPages - 1 && (
                            <PostPaginationButton page={allPages} />
                        )}
                    </div>

                    <div>
                        {currentPage < allPages && (
                            <PostPaginationArrows
                                type="next"
                                page={currentPage + 1}
                            />
                        )}
                    </div>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PostPagination;
