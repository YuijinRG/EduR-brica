# EduRúbrica — Backend (local)

Pasos rápidos para configurar y probar el backend localmente.

1. Copia el ejemplo de entorno:

   - Renombra `server/.env.example` a `server/.env` y rellena tus credenciales MySQL.

2. Crea la base de datos y la tabla `users`:

   - Usa `phpMyAdmin` (http://localhost/phpmyadmin) y ejecuta el script `init_db.sql`,
     o desde terminal MySQL:

```sql
SOURCE init_db.sql;
```

3. Instala dependencias e inicia el servidor:

```powershell
cd server
npm install
npm start
```

4. Abre el formulario de registro:

   - http://localhost:3000/register

5. Verifica en phpMyAdmin que el registro se guardó en la tabla `mi_app.users`.

Notas:
- No almacenes credenciales reales en repositorios públicos.
- Si usas XAMPP/WAMP, asegúrate de que el servicio MySQL está corriendo.
