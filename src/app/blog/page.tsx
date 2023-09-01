import Blog from '@/src/components/Blog';
import { getPosts, getUsers } from '@/src/utils/data';

export const revalidate = 60;

export default async function BlogPage() {
  return <Blog posts={await getPosts()} users={await getUsers()} />;
}
