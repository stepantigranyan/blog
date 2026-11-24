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
    title?: string;
    author?: string;
}
