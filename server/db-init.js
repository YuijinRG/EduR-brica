const mysql = require('mysql2/promise');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const DB_NAME = process.env.DB_NAME || 'mi_app';

async function ensure() {
  // Connect without database to create it if missing
  const conn = await mysql.createConnection({ host: DB_HOST, user: DB_USER, password: DB_PASS, multipleStatements: true });
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
  await conn.changeUser({ database: DB_NAME });

  // Create users table if missing
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100),
      email VARCHAR(255) UNIQUE,
      password_hash VARCHAR(255),
      role VARCHAR(20) NOT NULL DEFAULT 'estudiante',
      creado_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await conn.query(createTableSQL);

  // Ensure role column exists (in case older table existed without it)
  const [cols] = await conn.query(
    'SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?',
    [DB_NAME, 'users', 'role']
  );
  if (cols[0].cnt === 0) {
    await conn.query("ALTER TABLE users ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'estudiante'");
  }

  await conn.end();
}

module.exports = ensure;
