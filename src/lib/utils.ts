import { ReadonlyURLSearchParams } from 'next/navigation';

import { SORT_ATTRIBUTES } from '@/lib/consts';
import { PostAttributes, SORT_TYPES } from '@/features/post/types';

export { cn } from 'cn';

export const getNow = () => new Date().toISOString();
export const formatToLongDate = (isoString: string, locale = 'en-US') => {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat(locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date);
};
export const readingTimeMinutes = (str: string) =>
    Math.ceil(str.trim().split(/\s+/).length / 200);

export function getQueryObject<T>(
    searchParams: ReadonlyURLSearchParams | URLSearchParams
) {
    return Object.fromEntries(searchParams.entries()) as T;
}

export const debounce = <T extends (...args: any) => any>(
    fn: T,
    delay: number
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return (...args: Parameters<T>): void => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export const sortBy = (
    arr: PostAttributes[],
    type: SORT_TYPES) => {
    switch (type) {
        case 'DATE_ASC':
            return arr.sort(
                (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
            );
        case 'DATE_DESC':
            return arr.sort(
                (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
            );
        case 'ASC':
            return arr.sort((a, b) =>
                a.title.localeCompare(b.title, undefined, {
                    sensitivity: 'base',
                })
            );
        case 'DESC':
            return arr.sort((a, b) =>
                b.title.localeCompare(a.title, undefined, {
                    sensitivity: 'base',
                })
            );
    }
};
