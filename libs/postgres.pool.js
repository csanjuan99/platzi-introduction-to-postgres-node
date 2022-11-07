const { Pool } = require("pg");
const { config } = require("../config/config");

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;
// No se necesita una funcion asincrona ya que si se
// genera una conexion esta sera compartida con otras
const pool = new Pool({ connectionString: URI });

module.exports = pool;
