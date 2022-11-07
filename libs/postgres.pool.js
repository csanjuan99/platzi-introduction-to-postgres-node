const { Pool } = require('pg');

// No se necesita una funcion asincrona ya que si se
// genera una conexion esta sera compartida con otras
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;
