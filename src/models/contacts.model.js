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
  const sql = `INSERT INTO contact ("userId","purposeId", "message","file") VALUES ($1,$2,$3,$4) RETURNING *`;

  const values = [data.userId, data.purposeId, data.message, data.file];

  return db.query(sql, values, callback);
};

exports.patchContact = (id, data, callback) => {
  const sql = `UPDATE contact SET 
  "userId"=COALESCE(NULLIF($1, '')::INTEGER, "userId"),
  "purposeId"=COALESCE(NULLIF($2, '')::INTEGER, "purposeId"),
  "message"=COALESCE(NULLIF($3, ''), "message"), 
  "file"=COALESCE(NULLIF($4, ''), "file"),
  "updatedAt"= $5
  WHERE id=$5 RETURNING *`;

  const values = [data.userId, data.purposeId, data.message, data.file, new Date(), id];

  return db.query(sql, values, callback);
};

exports.deleteContact = (id, callback) => {
  const sql = `DELETE FROM contact WHERE id=$1 RETURNING *`;

  const values = [id];

  return db.query(sql, values, callback);
};
