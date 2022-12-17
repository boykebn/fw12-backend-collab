const db = require("../helper/db.helper");

exports.selectAllExperience = (callback) => {
  const sql = `SELECT * FROM experiences`;

  return db.query(sql, callback);
};

exports.selectExperience = (id, callback) => {
  const sql = `SELECT * FROM experiences WHERE id=$1`;

  const values = [id];

  return db.query(sql, values, callback);
};

exports.insertExperience = (data, callback) => {
  const sql = `INSERT INTO experiences ("companyName","position","userId","joinDate","outDate","description") VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;

  const values = [
    data.companyName,
    data.position,
    data.userId,
    data.joinDate,
    data.outDate,
    data.description,
  ];

  return db.query(sql, values, callback);
};

exports.patchExperience = (id, data, callback) => {
  const sql = `UPDATE experiences SET 
  "companyName"=COALESCE(NULLIF($1, ''), "companyName"), 
  "position"=COALESCE(NULLIF($2, ''), "position"), 
  "userId"=COALESCE(NULLIF($3, '')::INTEGER, "userId"),
  "joinDate"=COALESCE(NULLIF($4, '')::TIMESTAMPTZ, "joinDate"),
  "outDate"=COALESCE(NULLIF($5, '')::TIMESTAMPTZ, "outDate"),
  "description"=COALESCE(NULLIF($6, ''), "description"),
  "updatedAt"= $7
  WHERE id=$8 RETURNING *`;

  const values = [
    data.companyName,
    data.position,
    data.userId,
    data.joinDate,
    data.outDate,
    data.description,
    new Date(),
    id,
  ];

  return db.query(sql, values, callback);
};

exports.deleteExperience = (id, callback) => {
  const sql = `DELETE FROM experiences WHERE id=$1 RETURNING *`;

  const values = [id];

  return db.query(sql, values, callback);
};
