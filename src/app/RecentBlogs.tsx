import { getPosts, getUsers } from '@/src/utils/data';
import PostItem from '@/src/components/Post';
import RecentBlogsLayout from '@/src/components/RecentBlogsLayout';
import { POST_PER_PAGE } from '@/src/constants';
import { Post } from '@/src/types';

export const revalidate = 60 * 60;

export default async function RecentBlogs() {
  const posts: Post[] = await getPosts();
  const users = await getUsers();

  const pages = posts?.length / POST_PER_PAGE;
  const lastPagePosts = posts.slice((pages - 1) * POST_PER_PAGE);

  return (
    <RecentBlogsLayout>
      {lastPagePosts.map(post => (
        <PostItem key={post.id} {...post} users={users} />
      ))}
    </RecentBlogsLayout>
  );
}
