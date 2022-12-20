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
  const sql = `INSERT INTO company ("name","field","email","phoneNumber","address","bio","instagram","linkedin","userId") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`;

  const values = [data.name, data.field, data.email, data.phoneNumber, data.address, data.bio, data.instagram, data.linkedin, data.userId];

  return db.query(sql, values, callback);
};

exports.patchCompany = (id, data, callback) => {
  const sql = `UPDATE company SET 
  "name"=COALESCE(NULLIF($1, ''), "name"), 
  "field"=COALESCE(NULLIF($2, ''), "field"), 
  "email"=COALESCE(NULLIF($3, ''), "email"),
  "phoneNumber"=COALESCE(NULLIF($4, ''), "phoneNumber"),
  "address"=COALESCE(NULLIF($5, ''), "address"),
  "bio"=COALESCE(NULLIF($6, '')::TEXT, "bio"),
  "instagram"=COALESCE(NULLIF($7, ''), "instagram"),
  "linkedin"=COALESCE(NULLIF($8, ''), "linkedin"),
  "userId"=COALESCE(NULLIF($9, '')::INTEGER, "userId"),
  "updatedAt"= $10
  WHERE id=$11 RETURNING *`;

  const values = [data.name, data.field, data.email, data.phoneNumber, data.address, data.bio, data.instagram, data.linkedin, data.userId, new Date(), id];

  return db.query(sql, values, callback);
};

exports.patchCompanyByUserId = (id, data, callback) => {
  const sql = `UPDATE company SET 
  "name"=COALESCE(NULLIF($1, ''), "name"), 
  "field"=COALESCE(NULLIF($2, ''), "field"), 
  "email"=COALESCE(NULLIF($3, ''), "email"),
  "phoneNumber"=COALESCE(NULLIF($4, ''), "phoneNumber"),
  "address"=COALESCE(NULLIF($5, ''), "address"),
  "bio"=COALESCE(NULLIF($6, '')::TEXT, "bio"),
  "instagram"=COALESCE(NULLIF($7, ''), "instagram"),
  "linkedin"=COALESCE(NULLIF($8, ''), "linkedin"),
  "userId"=COALESCE(NULLIF($9, '')::INTEGER, "userId"),
  "updatedAt"= $10
  WHERE "userId"=$11 RETURNING *`;

  const values = [data.name, data.field, data.email, data.phoneNumber, data.address, data.bio, data.instagram, data.linkedin, data.userId, new Date(), id];

  return db.query(sql, values, callback);
}

exports.deleteCompany = (id, callback) => {
  const sql = `DELETE FROM company WHERE id=$1 RETURNING *`;

  const values = [id];

  return db.query(sql, values, callback);
};
