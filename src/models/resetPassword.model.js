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

exports.insertResetPassword = (data, cb) => {
    const sql = 'INSERT INTO "resetPassword" ("code", "userId") VALUES ($1, $2) RETURNING *';
    const value = [data.code, data.userId];
    db.query(sql, value, cb);
};

exports.updateResetPassword = (id, data, cb) => {
    const sql = `UPDATE "resetPassword" SET "code" = COALESCE(NULLIF($1, '')::VARCHAR, "code"), "userId" = COALESCE(NULLIF($2, '')::INT, "userId") WHERE id = $3 RETURNING *`;
    const values = [data.code, data.userId, id];
    db.query(sql, values, cb);
};

exports.deletedResetPassword = (data, cb) => {
    const sql = 'DELETE FROM "resetPassword" WHERE id = $1 RETURNING *';
    const values = [data.id];
    db.query(sql, values, cb);
};
