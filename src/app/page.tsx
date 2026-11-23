import { FC } from 'react';
import PostList from "@/features/post/components/PostList";
import PostPagination from '@/features/post/components/PostPagination';
import { getAllPosts } from '@/features/post/queries';

interface AppProps {
  searchParams: Promise<{ page: string | undefined, limit: string | undefined}>
}

const App: FC<AppProps> = async ({ searchParams}) => {
  const query = await searchParams;

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 3;

  const allPosts = await getAllPosts(page, limit);

  console.log(allPosts);

  if(!allPosts) {
    return
  }

  return (
      <main className='grid grid-rows-[1fr_auto] gap-y-5'>
        <PostList key={`${page}-${limit}`} data={allPosts?.data}/>
        <PostPagination pages={allPosts.allPages} currentPage={page} limit={limit} />
      </main>
  );
};

export default App;
