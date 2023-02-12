export const getPosts = async () => {
  const response = await fetch('http://localhost:3000/posts');
  if (!response.ok) {
    throw new Error("Couldn't get posts");
  }
  return await response.json();
};

export const createPost = async (fd) => {
  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: fd,
  });

  if (!response.ok) {
    throw new Error('Oops');
  }
  return true;
};
