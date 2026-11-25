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
        () => debounce((url: string) => router.push(url), 1000),
        [router]
    );

    const handleSearch = (event: SubmitEvent) => {
        event.preventDefault();
        const query = new URLSearchParams(searchParams);

        if (search.trim()) {
            query.set('content', search);
        } else {
            query.delete('content');
        }

        router.push(`${ROUTES.HOME}?${query}`);
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const query = new URLSearchParams(searchParams);

        if (value.trim()) {
            query.set('content', value);
        } else {
            query.delete('content');
        }

        setSearch(value);

        debouncedPush(`${ROUTES.HOME}?${query}`);
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
