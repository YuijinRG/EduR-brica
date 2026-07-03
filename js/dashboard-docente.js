/**
 * EduRúbrica — Control del Panel del Docente
 */
document.addEventListener("DOMContentLoaded", async () => {
  // 1. El guardián verifica el acceso de docente
  const perfil = await EduAuth.protegerRuta("docente");
  if (!perfil) return;

  // 2. Personaliza la interfaz con el nombre real
  const userNameEl = document.getElementById("user-name");
  if (userNameEl) userNameEl.textContent = perfil.nombre;

  console.log("[Docente Portal] Interfaz inicializada correctamente.");
});