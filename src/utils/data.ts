import 'server-only';

type Init = {
  next: {
    revalidate: number;
  };
};

export const getPosts = async (init?: Init) => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts', init);
  return resp.json();
};

export const getUsers = async (init?: Init) => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users', init);
  return resp.json();
};
