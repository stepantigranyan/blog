import { Metadata } from 'next';

export const metadata: Metadata =  {
    title: 'New Post',
}

const NewPostLayout = ({children}: LayoutProps<'/'>) => {
    return (
        <>{children}</>
    )
};

export default NewPostLayout;