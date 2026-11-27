import { ReactNode } from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: {
        default: 'Blog',
        template: '%s | Blog',
    },
};

const PostLayout = ({children}: { children: ReactNode}) => {
    return (
        <>{children}</>
    )
};

export default PostLayout;