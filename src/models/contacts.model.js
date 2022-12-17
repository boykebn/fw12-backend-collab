const db = require("../helper/db.helper");

exports.selectAllContact = (callback) => {
  const sql = `SELECT * FROM contact`;

  return db.query(sql, callback);
};

exports.selectContact = (id, callback) => {
  const sql = `SELECT * FROM contact WHERE id=$1`;

  const values = [id];

  return db.query(sql, values, callback);
};

exports.insertContact = (data, callback) => {
  const sql = `INSERT INTO contact ("userId","message","file") VALUES ($1,$2,$3) RETURNING *`;

  const values = [data.userId, data.message, data.file];

  return db.query(sql, values, callback);
};

exports.patchContact = (id, data, callback) => {
  const sql = `UPDATE contact SET 
  "userId"=COALESCE(NULLIF($1, '')::INTEGER, "userId"),
  "message"=COALESCE(NULLIF($2, ''), "message"), 
  "file"=COALESCE(NULLIF($3, ''), "file")
  WHERE id=$4 RETURNING *`;

  const values = [data.userId, data.message, data.file, id];

  return db.query(sql, values, callback);
};

exports.deleteContact = (id, callback) => {
  const sql = `DELETE FROM contact WHERE id=$1 RETURNING *`;

  const values = [id];

  return db.query(sql, values, callback);
};
