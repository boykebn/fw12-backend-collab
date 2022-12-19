const db = require("../helper/db.helper");

exports.selectProfile = (id, cb) => {
  const sql = `SELECT 
    u.name, 
    u.picture,
    u."phoneNumber",
    u.email,
    u.address,
    u.bio,
    u."jobDesk",
    u.instagram,
    u.github,
    u.gitlab,
    u.status,
    u.linkedin,
    string_to_array(string_agg(s.name, ', '), ', ') AS skills
    FROM users u 
    JOIN "userSkills" us ON us."userId" = u.id
    JOIN "skills" s ON s.id = us."skillId"
    WHERE u.id=$1 GROUP BY u.id;`;

  const values = [id];

  return db.query(sql, values, cb);
};

exports.selectExperienceProfile = (id, callback) => {
  const sql = `SELECT * FROM experiences WHERE "userId"=$1`;

  const values = [id];

  return db.query(sql, values, callback);
};

exports.selectPortofolioProfile = (id, callback) => {
  const sql = `SELECT * FROM portofolio WHERE "userId"=$1`;

  const values = [id];

  return db.query(sql, values, callback);
};
