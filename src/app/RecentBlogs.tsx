import { getPosts, getUsers } from '@/src/utils/data';
import Post from '@/src/components/Post';
import RecentBlogsLayout from '@/src/components/RecentBlogsLayout';

export const revalidate = 60 * 60;

export default async function RecentBlogs() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
    <RecentBlogsLayout>
      <Post />
      <Post />
      <Post />
      <Post />
    </RecentBlogsLayout>
  );
}
