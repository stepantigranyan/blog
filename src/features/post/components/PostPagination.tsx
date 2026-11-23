import { FC } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PostPaginationProps {
    pages: number;
    currentPage: number;
    limit: number;
}

const PostPagination: FC<PostPaginationProps> = ({ pages, currentPage, limit }) => {
    return (
        <div className='mt-10'>
            <Pagination>
                <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={`?page=${currentPage - 1}&limit=${limit}`} />
                        </PaginationItem>
                    )}


                    {currentPage > 2 && (
                        <PaginationItem>
                            <PaginationLink href={`?page=${currentPage - 2}&limit=${limit}`}>{currentPage - 2}</PaginationLink>
                        </PaginationItem>
                    )}

                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationLink href={`?page=${currentPage - 1}&limit=${limit}`}>{currentPage - 1}</PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem>
                        <PaginationLink href={`?page=${currentPage}&limit=${limit}`} isActive>
                            {currentPage}
                        </PaginationLink>
                    </PaginationItem>


                    {currentPage < pages && (
                        <PaginationItem>
                            <PaginationLink href={`?page=${currentPage + 1}&limit=${limit}`}>{currentPage + 1}</PaginationLink>
                        </PaginationItem>
                    )}

                    {currentPage  < pages - 1 && (
                        <PaginationItem>
                            <PaginationLink href={`?page=${currentPage + 2}&limit=${limit}`}>{currentPage + 2}</PaginationLink>
                        </PaginationItem>
                    )}

                    {currentPage  < pages && (
                        <PaginationItem>
                            <PaginationNext href={`?page=${currentPage + 1}&limit=${limit}`} />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    )
};

export default PostPagination;