const db = require('../helper/db.helper')

exports.selectAllUsers = (callback) => {
    const sql = `SELECT * FROM users`

    return db.query(sql, callback)
}

exports.selectUser = (id, callback) => {
    const sql = `SELECT * FROM users WHERE id=$1`

    const values = [id]

    return db.query(sql, values, callback)
}

exports.selectUserByEmail = (email, callback) => {
    const sql = `SELECT * FROM users WHERE email=$1`

    const values = [email]

    return db.query(sql, values, callback)
}

exports.insertUser = (data, callback) => {
    const sql = `INSERT INTO users ("picture", "name", "phoneNumber", "email", "password", "address", "bio", "jobDesk", "instagram", "linkedin", "github", gitlab", "status", "role") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`

    const values = [data.picture, data.name, data.phoneNumber, data.email, data.password, data.address, data.bio, data.jobDesk, data.instagram, data.linkedin, data.github, data.gitlab, data.status, data.role]

    return db.query(sql, values, callback)
}

exports.patchUser = (id, data, callback) => {
    const sql = `UPDATE users SET "picture"=COALESCE(NULLIF($1, ''), "picture"), "name"=COALESCE(NULLIF($2, ''), "name"), "phoneNumber"=COALESCE(NULLIF($3, ''), "phoneNumber"), "email"=COALESCE(NULLIF($4, ''), "email"), "password"=COALESCE(NULLIF($5, ''), "password", "address"=COALESCE(NULLIF($6, ''), "address")), "bio"=COALESCE(NULLIF($7, '')::TEXT, "bio"),
    "jobDesk"=COALESCE(NULLIF($8, ''), "jobDesk"),"instagram"=COALESCE(NULLIF($9, ''), "instagram"), "linkedin"=COALESCE(NULLIF($10, ''), "linkedin"), "github"=COALESCE(NULLIF($11, ''), "github"), "gitlab"=COALESCE(NULLIF($12, ''), "gitlab"), "status"=COALESCE(NULLIF($13, ''), "status"), "status"=COALESCE(NULLIF($14, ''), "status")
    WHERE id=$15 RETURNING *`

    const values = [data.picture, data.name, data.phoneNumber, data.email, data.password, data.address, data.bio, data.jobDesk, data.instagram, data.linkedin, data.github, data.gitlab, data.status, data.role, id] 

    return db.query(sql, values, callback)
}

exports.deleteUser = (id, callback) => {
    const sql = `DELETE FROM users WHERE id=$1 RETURNING *`

    const values = [id]

    return db.query(sql, values, callback)
}