const { Client } = require("pg");

async function connect() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432
  });
  await client.connect();
  return client;
}

module.exports = {
  connect
};
