require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "postgres"
  }
};

module.exports = {
  config
};
