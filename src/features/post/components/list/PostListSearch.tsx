'use client';
import { SubmitEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ChevronDown, X } from 'lucide-react';

const PostListSearch = () => {
    const [search, setSearch] = useState<string>('');
    const [searchByType, setSearchByType] = useState<string>('title');

    const router = useRouter();

    const handleSearch = (event: SubmitEvent) => {
        event.preventDefault();
        router.push(`/post?${searchByType}=${search}`);
    };

    return (
        <div className="mb-10">
            <form onSubmit={handleSearch}>
                <InputGroup className="w-full md:w-1/2">
                    <InputGroupInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={`Search by ${searchByType}`}
                        id="search-input"
                        name="search-input"
                    />

                    <InputGroupAddon>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <InputGroupButton
                                        className="cursor-pointer"
                                        variant="ghost"
                                        aria-label="More"
                                        size="icon-xs"
                                    >
                                        <ChevronDown />
                                    </InputGroupButton>
                                }
                            />
                            <DropdownMenuContent
                                align="start"
                                sideOffset={8}
                                alignOffset={-4}
                            >
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        onClick={() => setSearchByType('title')}
                                    >
                                        Title
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            setSearchByType('author')
                                        }
                                    >
                                        Author
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </InputGroupAddon>

                    <InputGroupAddon
                        align="inline-end"
                        className={search ? 'block' : 'hidden'}
                    >
                        <Button
                            size="icon-xs"
                            variant="ghost"
                            onClick={() => setSearch('')}
                        >
                            <X />
                        </Button>
                    </InputGroupAddon>

                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            className="cursor-pointer"
                            size="xs"
                            variant="secondary"
                            type="submit"
                        >
                            Search
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    );
};

export default PostListSearch;
