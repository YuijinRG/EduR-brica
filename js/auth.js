/**
 * EduRúbrica — auth.js
 * ------------------------------------------------------------------
 * MODO DE DESARROLLO LOCAL (BYPASS)
 * Permite la navegación inmediata hacia las nuevas pantallas sin internet.
 * ------------------------------------------------------------------
 */

const RUTAS_DASHBOARD = {
  estudiante: "dashboard-estudiante.html",
  docente: "dashboard-docente.html",
};

/**
 * Simulación: Devuelve un perfil estático para que las futuras interfaces
 * puedan renderizar el nombre del usuario y el avatar correctamente.
 */
async function obtenerPerfilActual() {
  const rolSimulado = window.localStorage.getItem("demo_rol") || "docente";
  return {
    id: "uid-ficticio-12345",
    nombre: rolSimulado === "estudiante" ? "Antonia" : "Dra. Ana Castillo",
    correo: rolSimulado === "estudiante" ? "antonia@edurubrica.cl" : "ana.castillo@edurubrica.cl",
    rol: rolSimulado,
    avatar_color: rolSimulado === "estudiante" ? "#10b981" : "#7c3aed",
    institucion: "Liceo Experimental Bicentenario",
    curso: rolSimulado === "estudiante" ? "4to Medio B" : null
  };
}

/**
 * Simulación: Valida las credenciales localmente y redirige.
 */
async function iniciarSesion(correo, password, rolEsperado) {
  console.log(`[Bypass Local] Intentando ingresar al portal: ${rolEsperado}`);
  
  // Guardamos temporalmente el rol seleccionado para mantener la coherencia
  window.localStorage.setItem("demo_rol", rolEsperado);

  // Generamos una pausa artificial de 600ms para emular de forma realista el retardo de red
  return new Promise((resolve) => {
    setTimeout(() => {
      window.location.href = RUTAS_DASHBOARD[rolEsperado] || "index.html";
      resolve({ ok: true });
    }, 600);
  });
}

/**
 * Simulación: Limpia el estado local y regresa a la bienvenida.
 */
async function cerrarSesion() {
  window.localStorage.removeItem("demo_rol");
  window.location.href = "index.html";
}

/**
 * Guardián de rutas simulado: Evita que seas expulsado de los dashboards mientras los diseñas.
 */
async function protegerRuta(rolEsperado) {
  console.log(`[Guardián] Bypass activo para la vista de: ${rolEsperado}`);
  return await obtenerPerfilActual();
}

// Mantenemos la firma de tu objeto global intacta
window.EduAuth = {
  iniciarSesion,
  cerrarSesion,
  obtenerPerfilActual,
  protegerRuta,
};