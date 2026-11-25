export const LIMIT = 8;

export const SORT_ATTRIBUTES = [
    { label: 'Oldest  first', value: 'DATE_ASC' },
    { label: 'Newest first', value: 'DATE_DESC' },
    { label: 'A to Z', value: 'ASC' },
    { label: 'Z to A', value: 'DESC' },
] as const;
