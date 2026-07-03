/**
 * EduRúbrica — Control del Panel del Estudiante
 */
document.addEventListener("DOMContentLoaded", async () => {
  // 1. El guardián verifica el acceso de estudiante
  const perfil = await EduAuth.protegerRuta("estudiante");
  if (!perfil) return;

  // 2. Personaliza la interfaz del alumno con nombre y curso
  const userNameEl = document.getElementById("user-name");
  const userCursoEl = document.getElementById("user-curso");
  
  if (userNameEl) userNameEl.textContent = perfil.nombre;
  if (userCursoEl) userCursoEl.textContent = perfil.curso || "4to Medio B";

  console.log("[Estudiante Portal] Interfaz inicializada correctamente.");
});