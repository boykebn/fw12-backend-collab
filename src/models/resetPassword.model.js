const db = require('../helper/db.helper')

exports.selectAllResetPassword = (cb) => {
    const sql = 'SELECT * FROM "resetPassword"';
    db.query(sql, cb);
};

exports.selectResetPasswordById = (data, cb) => {
    const sql = 'SELECT * FROM "resetPassword" WHERE id=$1';
    const values = [data.id];
    db.query(sql, values, cb);
};

exports.selectResetPasswordByEmailAndCode = (data, cb) => {
    const sql = 'SELECT * FROM "resetPassword" WHERE "email"= $1 AND "code" = $2';
    const values = [data.email, data.code];
    db.query(sql, values, cb);
};

exports.insertResetPassword = (data, cb) => {
    const sql = 'INSERT INTO "resetPassword" ("email", "code", "userId") VALUES ($1, $2, $3) RETURNING *';
    const value = [data.email, data.code, data.userId];
    db.query(sql, value, cb);
};

exports.updateResetPassword = (id, data, cb) => {
    const sql = `UPDATE "resetPassword" SET "code" = COALESCE(NULLIF($1, '')::VARCHAR, "code"), "userId" = COALESCE(NULLIF($2, '')::INT, "userId"), "updatedAt"=$3 WHERE id = $4 RETURNING *`;
    const values = [data.code, data.userId, new Date(), id];
    db.query(sql, values, cb);
};

exports.deletedResetPassword = (data, cb) => {
    const sql = 'DELETE FROM "resetPassword" WHERE id = $1 RETURNING *';
    const values = [data.id];
    db.query(sql, values, cb);
};
