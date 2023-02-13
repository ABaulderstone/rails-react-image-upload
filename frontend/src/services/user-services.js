export const login = async (details) => {
  if (details.email === 'admin@fake.com')
    return { username: 'admin', role: 'admin' };
  return { username: 'user', role: 'user' };
};

export const logout = async () => {
  return true;
};
