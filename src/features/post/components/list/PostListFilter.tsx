'use client';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { SORT_ATTRIBUTES } from '@/lib/consts';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/routes';


const PostListFilter = () => {
    const searchParams = useSearchParams();
    const query = new URLSearchParams(searchParams);
    const router = useRouter();

    const handleClick = (sortType: string) => {
        const query = new URLSearchParams(searchParams);
        query.set('sort', sortType);
        router.push(`${ROUTES.HOME}?${query}`);
    }

    return (
        <div>
                <div className="flex items-center gap-x-2">
                    <Select value={query.get('sort') || 'DATE_DESC'} name='sort' items={SORT_ATTRIBUTES}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {SORT_ATTRIBUTES.map((item) => (
                                    <SelectItem
                                        key={item.value}
                                        value={item.value}
                                        onClick={() => handleClick(item.value)}
                                    >
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
        </div>
    );
};

export default PostListFilter;
