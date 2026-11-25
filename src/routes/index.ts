export const ROUTES = {
    HOME: '/',
    CREATE_POST: '/post/new',
    EDIT_POST: (id: string) => `/post/${id}/edit`,
    GET_POST: (id: string) => `/post/${id}`,
} as const;
