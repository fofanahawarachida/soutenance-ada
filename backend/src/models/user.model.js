module.exports = {
  create: 'INSERT INTO users (email, password) VALUES (?, ?)',
  login: 'SELECT * FROM users WHERE email = ?'
};
