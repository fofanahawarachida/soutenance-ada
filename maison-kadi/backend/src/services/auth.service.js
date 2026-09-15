const db = require('../config/db');

exports.login = (email, password, callback) => {
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {

    console.log("SQL ERROR :", err);
    console.log("SQL RESULTS :", results);

    if (err) {
      return callback(err, null);
    }

    if (results.length === 0) {
      return callback(null, { error: "Email ou mot de passe incorrect" });
    }

    return callback(null, results[0]);
  });
};
