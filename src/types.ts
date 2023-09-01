export type User = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  users: User[];
};

export type Comment = Omit<Post, 'users' | 'title'> & { postId: number; name: string; email: string };
