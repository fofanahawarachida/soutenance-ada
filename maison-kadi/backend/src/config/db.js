const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',     // ⭐ MySQL Docker exposé ici
  port: 3306,            // ⭐ Port exposé
  user: 'root',          // ⭐ Ton utilisateur MySQL Docker
  password: 'root',      // ⭐ Ton mot de passe MySQL Docker
  database: 'maison_kadi' // ⭐ Ta base que tu viens de créer
});

module.exports = db;
