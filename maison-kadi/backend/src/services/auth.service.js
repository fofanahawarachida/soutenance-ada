const db = require('../config/db');
const model = require('../models/user.model');

exports.register = (email, password) => {
  return db.promise().query(model.create, [email, password]);
};

exports.login = (email) => {
  return db.promise().query(model.login, [email]);
};
