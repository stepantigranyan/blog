'use client';

import { ChangeEvent, SubmitEvent, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';


import {  Search, X } from 'lucide-react';
import { ROUTES } from '@/routes';
import { debounce } from '@/lib/utils';


const PostListSearch = () => {
    const searchParams = useSearchParams();
    const content = searchParams.get('content');

    const [search, setSearch] = useState<string>(content || '');
    const router = useRouter();

    const debouncedPush = useMemo(
        () => debounce((url: string) => router.replace(url), 1000),
        [router]
    );

    const handleSearch = (event: SubmitEvent) => {
        event.preventDefault();
        const sort = searchParams.get('sort');
        debouncedPush(`${ROUTES.HOME}?content=${search}&${sort ? `sort=${sort}` : ''}`);
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);

        if (value.trim().length || value.length === 0) {
            const sort = searchParams.get('sort');
            debouncedPush(`${ROUTES.HOME}?content=${value}${sort ? `&sort=${sort}` : ''}`);
        }

    };

    const handleReset = () => {
        setSearch('');
        const query = new URLSearchParams(searchParams);
        query.delete('content');
        router.push(`${ROUTES.HOME}?${query}`);
    }

    return (
        <div className="w-full md:w-1/2">
            <form onSubmit={handleSearch}>
                <InputGroup>
                    <InputGroupInput
                        value={search}
                        onChange={handleInput}
                        placeholder="Search"
                        id="search-input"
                        name="search-input"
                    />

                    <InputGroupAddon
                        align="inline-end"
                        className={search ? 'block' : 'hidden'}
                    >
                        <Button
                            size="icon-xs"
                            variant="ghost"
                            onClick={handleReset}
                        >
                            <X />
                        </Button>
                    </InputGroupAddon>

                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            className="cursor-pointer"
                            size="icon-xs"
                            variant="secondary"
                            type="submit"
                        >
                            <Search />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    );
};

export default PostListSearch;
