/**
 * EduRúbrica — Plantilla de configuración
 * ------------------------------------------------------------------
 * 1. Copia este archivo y renómbralo a "config.js" (en la misma carpeta js/).
 * 2. Reemplaza los valores de abajo con los de tu proyecto Supabase:
 *      Panel de Supabase → Project Settings → API
 *      - "Project URL"      → SUPABASE_URL
 *      - "anon public" key  → SUPABASE_ANON_KEY
 * 3. "config.js" NO debe subirse a git (ya está en .gitignore).
 *
 * ¿Por qué es seguro exponer la anon key en el navegador?
 * La "anon key" de Supabase está diseñada para vivir en el cliente: no es
 * un secreto. La seguridad real de tus datos la dan las políticas RLS
 * definidas en sql/schema.sql, no el hecho de ocultar esta clave.
 * Lo que JAMÁS debes poner aquí ni en el frontend es la "service_role key".
 * ------------------------------------------------------------------
 */
window.EDU_RUBRICA_CONFIG = {
  SUPABASE_URL: "https://TU-PROYECTO.supabase.co",
  SUPABASE_ANON_KEY: "TU_ANON_KEY_PUBLICA_AQUI",
};