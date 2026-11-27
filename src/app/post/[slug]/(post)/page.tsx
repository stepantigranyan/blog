import PostInfo from '@/features/post/components/info/PostInfo';
import { getPost } from '@/features/post/queries';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug;
    const id = slug.split('_')[0];
    const post = await getPost(id);

    return {
        title: {
            default: post!.title,
            template: `%s | ${post!.title}`
        },
        description: post!.description,
        openGraph: {
            title: post!.title,
            description: post!.description,
            siteName: 'Blog',
            type: 'website',
        }
    }
}

const PostInfoPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const id = slug.split('_')[0];
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    return <PostInfo post={post} />;
};

export default PostInfoPage;
