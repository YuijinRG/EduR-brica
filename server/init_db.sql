-- Inicializa la base de datos y la tabla `users` para EduRúbrica
CREATE DATABASE IF NOT EXISTS mi_app;
USE mi_app;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  role VARCHAR(20) NOT NULL DEFAULT 'estudiante',
  creado_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Si la tabla ya existía sin la columna `role`, intenta agregarla (MySQL 8+ soporta IF NOT EXISTS)
ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(20) NOT NULL DEFAULT 'estudiante';
