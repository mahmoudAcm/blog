import Blog from '@/src/components/Blog';

export const revalidate = 60;

const getPosts = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  return resp.json();
};

const getUsers = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  return resp.json();
};

export default async function BlogPage() {
  return <Blog posts={await getPosts()} users={await getUsers()} />;
}
