import { ReadonlyURLSearchParams } from 'next/navigation';

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

export function getQueryObject(
    searchParams: ReadonlyURLSearchParams | URLSearchParams
): Record<string, string> {
    return Object.fromEntries(searchParams.entries());
}
