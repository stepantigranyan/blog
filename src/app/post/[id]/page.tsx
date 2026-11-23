import PostInfo from "@/features/post/components/PostInfo";

const PostInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return <PostInfo params={params} />;
};

export default PostInfoPage;
