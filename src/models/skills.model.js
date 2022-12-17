const db = require('../helper/db.helper')

exports.selectAllSkills = (callback) => {
    const sql = `SELECT * FROM skills`

    return db.query(sql, callback)
}

exports.selectSkill = (id, callback) => {
    const sql = `SELECT * FROM skills WHERE id=$1`

    const values = [id]

    return db.query(sql, values, callback)
}

exports.insertSkill = (data, callback) => {
    const sql = `INSERT INTO skills ("name") VALUES ($1) RETURNING *`

    const values = [data.name]

    return db.query(sql, values, callback)
}

exports.patchSkill = (id, data, callback) => {
    const sql = `UPDATE skills SET "name"=COALESCE(NULLIF($1, ''), "name") WHERE id=$2 RETURNING *`

    const values = [data.name, id]

    return db.query(sql, values, callback)
}

exports.deleteSkill = (id, callback) => {
    const sql = `DELETE FROM skills WHERE id=$1 RETURNING *`

    const values = [id]

    return db.query(sql, values, callback)
}