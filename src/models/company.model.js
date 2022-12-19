const db = require("../helper/db.helper");

exports.selectAllCompany = (callback) => {
  const sql = `SELECT * FROM company`;

  return db.query(sql, callback);
};

exports.selectCompany = (id, callback) => {
  const sql = `SELECT * FROM company WHERE id=$1`;

  const values = [id];

  return db.query(sql, values, callback);
};

exports.insertCompany = (data, callback) => {
  const sql = `INSERT INTO company ("name","field","userId") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`;

  const values = [data.name, data.field, data.userId];

  return db.query(sql, values, callback);
};

exports.patchCompany = (id, data, callback) => {
  const sql = `UPDATE company SET 
  "name"=COALESCE(NULLIF($1, ''), "name"), 
  "field"=COALESCE(NULLIF($2, ''), "field"), 
  "userId"=COALESCE(NULLIF($3, '')::INTEGER, "userId"),
  "updatedAt"= $4
  WHERE id=$5 RETURNING *`;

  const values = [data.name, data.field, data.userId, new Date(), id];

  return db.query(sql, values, callback);
};

exports.deleteCompany = (id, callback) => {
  const sql = `DELETE FROM company WHERE id=$1 RETURNING *`;

  const values = [id];

  return db.query(sql, values, callback);
};
