require("dotenv").config();
const { json } = require("express");
const { Pool } = require("pg");
let pgClient;

async function connection() {
  pgClient = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  await pgClient.connect();
  return pgClient;
}

module.exports = {
  connection,
};
