const { Pool } = require("pg");

const db = new Pool({
  connectionString:
    "postgresql:postgres:1@localhost:5432/peworld_app" ||
    process.env.DATABASE_URL,
});

module.exports = db;
