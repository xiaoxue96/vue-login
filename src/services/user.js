const users = [{ username: 'admin', password: 'admin' }];

export default {
  login: ({ username, password }) => {
    return users.some(
      (user) => user.username === username && user.password === password
    );
  },
};
