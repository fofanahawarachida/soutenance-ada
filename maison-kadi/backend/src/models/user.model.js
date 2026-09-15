const db = require('../config/db');

const User = {
  findByEmailAndPassword: (email, password, callback) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0] || null);
    });
  }
};

module.exports = User;
