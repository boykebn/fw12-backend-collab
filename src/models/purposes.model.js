const db = require('../helper/db.helper')

exports.selectAllPurpose = (cb) => {
    const sql = 'SELECT * FROM "purpose"';
    db.query(sql, cb);
};

exports.selectPurposeById = (data, cb) => {
    const sql = 'SELECT * FROM "purpose" WHERE id=$1';
    const values = [data.id];
    db.query(sql, values, cb);
};

exports.insertPurpose = (data, cb) => {
    const sql = 'INSERT INTO "Purpose" ("name") VALUES ($1) RETURNING *';
    const value = [data.name];
    db.query(sql, value, cb);
};

exports.updatePurpose = (id, data, cb) => {
    const sql = `UPDATE "purpose" SET "name" = COALESCE(NULLIF($1, '')::VARCHAR, "picture"), "updatedAt"=$2 WHERE id = $3 RETURNING *`;
    const values = [data.picture, new Date(), id];
    db.query(sql, values, cb);
};

exports.deletedPurpose = (data, cb) => {
    const sql = 'DELETE FROM "purpose" WHERE id = $1 RETURNING *';
    const values = [data.id];
    db.query(sql, values, cb);
};
