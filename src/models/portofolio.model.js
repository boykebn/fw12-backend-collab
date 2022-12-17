const db = require('../helper/db.helper')

exports.selectAllPortofolio = (cb) => {
    const sql = 'SELECT * FROM "portofolio"';
    db.query(sql, cb);
};

exports.selectPortofolioeById = (data, cb) => {
    const sql = 'SELECT * FROM "portofolio" WHERE id=$1';
    const values = [data.id];
    db.query(sql, values, cb);
};

exports.insertPortofolio = (data, cb) => {
    const sql = 'INSERT INTO "portofolio" ("link", "userId", "name", "picture") VALUES ($1, $2, $3, $4) RETURNING *';
    const value = [data.link, data.userId, data.name, data.picture];
    db.query(sql, value, cb);
};

exports.updatePortofolio = (id, data, cb) => {
    const sql = `UPDATE "portofolio" SET "link" = COALESCE(NULLIF($1, '')::VARCHAR, "link"), "userId" = COALESCE(NULLIF($2, '')::INT, "userId"), "name" = COALESCE(NULLIF($3, '')::VARCHAR, "name"), "picture" = COALESCE(NULLIF($4, '')::VARCHAR. "picture"), "updatedAt"=$5 WHERE id = $6 RETURNING *`;
    const values = [data.link, data.userId, data.name, data.picture, new Date(), id];
    db.query(sql, values, cb);
};

exports.deletedPortofolio = (data, cb) => {
    const sql = 'DELETE FROM "portofolio" WHERE id = $1 RETURNING *';
    const values = [data.id];
    db.query(sql, values, cb);
};
