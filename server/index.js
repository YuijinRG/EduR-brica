const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos del proyecto raíz (html, css, register.html, etc)
app.use(express.static(path.join(__dirname, '..')));

// Inicializa DB si hace falta y luego crea pool
const ensureDb = require('./db-init');

async function start() {
  try {
    await ensureDb();
  } catch (err) {
    console.error('Fallo inicializando la base de datos:', err);
    // Continue: database module may still attempt to connect and fail with clearer error
  }

  const pool = require('./database');

  app.post('/register', async (req, res) => {
  try {
      const { nombre, email, password, role } = req.body;
      if (!email || !password) return res.status(400).json({ error: 'Faltan campos' });

      const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
      if (rows.length) return res.status(409).json({ error: 'Email ya registrado' });

      const hash = await bcrypt.hash(password, 10);
      // Valida rol y mapea a valores permitidos
      const allowed = ['estudiante', 'docente'];
      const userRole = allowed.includes(role) ? role : 'estudiante';
      await pool.query('INSERT INTO users (nombre, email, password_hash, role) VALUES (?, ?, ?, ?)', [nombre || null, email, hash, userRole]);
      res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server escuchando en http://localhost:${port}`));
}

start();
