const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'maison_kadi'
});

module.exports = db;
