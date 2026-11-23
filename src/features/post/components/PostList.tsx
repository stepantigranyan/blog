import { FC } from 'react';
import PostCard from "@/features/post/components/PostCard";
import { PostAttributes } from '@/features/post/types';

interface PostListProps {
  data: PostAttributes[]
}

const PostList: FC<PostListProps> = ({data}) => {

  return (
    <div className="grid grid-cols-1 gap-4 justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          author={post.author}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};

export default PostList;
