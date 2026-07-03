/**
 * EduRúbrica — database.js
 * ------------------------------------------------------------------
 * Inicializa el cliente oficial de Supabase (@supabase/supabase-js) y lo
 * expone como "window.db" para que el resto de scripts (auth.js, y los
 * scripts de cada dashboard en la Fase 2) puedan usarlo sin reimportarlo.
 *
 * Requiere, en este orden, dentro del <head> o antes de </body> del HTML:
 *   1. <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
 *   2. <script src="js/config.js"></script>       (tus credenciales)
 *   3. <script src="js/database.js"></script>      (este archivo)
 *
 * Este proyecto usa el paquete via CDN (UMD) porque no hay un bundler
 * (Vite/Webpack) configurado todavía. Si más adelante migras a Vite,
 * puedes reemplazar esto por:
 *   import { createClient } from '@supabase/supabase-js'
 *   export const db = createClient(import.meta.env.VITE_SUPABASE_URL, ...)
 * ------------------------------------------------------------------
 */

(function initSupabaseClient() {
  if (!window.EDU_RUBRICA_CONFIG) {
    console.error(
      "[EduRúbrica] No se encontró window.EDU_RUBRICA_CONFIG. " +
      "¿Copiaste js/config.example.js a js/config.js y cargaste ese script antes que database.js?"
    );
    return;
  }

  const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.EDU_RUBRICA_CONFIG;

  if (!SUPABASE_URL || SUPABASE_URL.includes("TU-PROYECTO")) {
    console.warn(
      "[EduRúbrica] Todavía estás usando las credenciales de ejemplo en js/config.js. " +
      "Reemplázalas por las de tu proyecto real en Supabase → Project Settings → API."
    );
  }

  // "supabase" aquí es el objeto global que expone el script UMD del CDN.
  const { createClient } = window.supabase;

  window.db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();