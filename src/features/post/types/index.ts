import { SORT_ATTRIBUTES } from '@/lib/consts';

export interface PostAttributes {
    id: string;
    title: string;
    author: string;
    description: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export interface PostOptionalAttributes extends Omit<
    PostAttributes,
    'id' | 'createdAt' | 'updatedAt'
> {}

export interface PostSearchOptions {
    page: string;
    limit: string;
    content?: string;
    sort?: SORT_TYPES;
}

export type SORT_TYPES = (typeof SORT_ATTRIBUTES)[number]['value'];
