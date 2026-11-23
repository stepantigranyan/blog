import { notFound } from "next/navigation";
import { PostForm } from "@/features/post/components/PostForm";
import { getPost } from '@/features/post/queries';

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}


export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
        <PostForm
            postId={post.id}
            initialData={{
              title: post.title,
              author: post.author,
              description: post.description ?? "",
              content: post.content,
            }}
        />
  );
}
