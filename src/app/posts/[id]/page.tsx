import PostDetails from '@/src/components/PostDetails';
import RecentBlogs from '@/src/app/RecentBlogs';
import { getUsers } from '@/src/utils/data';

export default async function Post() {
  const users = await getUsers();
  return (
    <>
      <RecentBlogs />
      <PostDetails users={users} />
    </>
  );
}
