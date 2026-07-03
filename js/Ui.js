/**
 * EduRúbrica — Lógica de las pantallas de autenticación
 * Interacciones de Interfaz y Credenciales de Prueba
 */

document.addEventListener("DOMContentLoaded", () => {
  initPasswordToggles();
  initDemoCredentials();
});

/**
 * Habilita el botón de "ojo" para mostrar/ocultar la contraseña.
 */
function initPasswordToggles() {
  const toggles = document.querySelectorAll("[data-toggle-password]");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const inputId = toggle.getAttribute("data-toggle-password");
      const input = document.getElementById(inputId);
      const icon = toggle.querySelector("i");
      if (!input) return;

      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";

      icon.classList.toggle("fa-eye", !isHidden);
      icon.classList.toggle("fa-eye-slash", isHidden);

      toggle.setAttribute("aria-pressed", String(isHidden));
    });
  });
}

/**
 * Rellena el formulario con las credenciales oficiales de prueba
 */
function initDemoCredentials() {
  const studentBtn = document.getElementById("fill-demo-student");
  const teacherBtn = document.getElementById("fill-demo-teacher");

  if (studentBtn) {
    studentBtn.addEventListener("click", () => {
      fillCredentials("student-email", "student-password", "antonia@edurubrica.cl", "alumno123");
    });
  }

  if (teacherBtn) {
    teacherBtn.addEventListener("click", () => {
      fillCredentials("teacher-email", "teacher-password", "ana.castillo@edurubrica.cl", "docente123");
    });
  }
}

function fillCredentials(emailId, passwordId, emailValue, passwordValue) {
  const emailInput = document.getElementById(emailId);
  const passwordInput = document.getElementById(passwordId);

  if (emailInput) emailInput.value = emailValue;
  if (passwordInput) passwordInput.value = passwordValue;
}
// Función para mostrar u ocultar la vista previa de criterios
function togglePreview(containerId, button) {
  const container = document.getElementById(containerId);
  
  if (!container) return; // Seguridad por si no encuentra el elemento

  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "block";
    button.innerHTML = "👁️‍🗨️ Ocultar"; // Cambia el texto/icono al abrirse
  } else {
    container.style.display = "none";
    button.innerHTML = "👁️ Vista previa"; // Restaura el texto original al cerrarse
  }
}
// Control de navegación entre Evaluación y Repositorio
function cambiarVista(vista) {
    const vistaEval = document.getElementById('vista-evaluacion');
    const vistaRepo = document.getElementById('vista-repositorio');
    const tabEval = document.getElementById('tab-evaluacion');
    const tabRepo = document.getElementById('tab-repositorio');

    if (vista === 'repositorio') {
        // Mostrar Repositorio, ocultar Evaluación
        if(vistaEval) vistaEval.style.display = 'none';
        if(vistaRepo) vistaRepo.style.display = 'block';
        
        // Cambiar estados activos del menú
        if(tabEval) tabEval.classList.remove('active');
        if(tabRepo) tabRepo.classList.add('active');
        
        // Quitar la restricción de scroll en el body para poder navegar las tarjetas libremente
        document.body.classList.remove('overflow-hidden-desktop');
    } else {
        // Mostrar Evaluación, ocultar Repositorio
        if(vistaEval) vistaEval.style.display = 'grid'; // Retorna al Split Screen CSS layout
        if(vistaRepo) vistaRepo.style.display = 'none';
        
        // Cambiar estados activos del menú
        if(tabRepo) tabRepo.classList.remove('active');
        if(tabEval) tabEval.classList.add('active');
        
        // Re-aplicar bloqueo de scroll de escritorio para la pantalla dividida fija
        document.body.classList.add('overflow-hidden-desktop');
    }
}
// Control de navegación para la vista de Estudiante
function cambiarVistaEstudiante(vista) {
    const vistaPanel = document.getElementById('vista-panel');
    const vistaRepo = document.getElementById('vista-repositorio');
    const tabPanel = document.getElementById('tab-panel');
    const tabRepo = document.getElementById('tab-repositorio');

    if (vista === 'repositorio') {
        if (vistaPanel) vistaPanel.style.display = 'none';
        if (vistaRepo) vistaRepo.style.display = 'block';
        
        if (tabPanel) tabPanel.classList.remove('active');
        if (tabRepo) tabRepo.classList.add('active');
    } else {
        if (vistaPanel) vistaPanel.style.display = 'block';
        if (vistaRepo) vistaRepo.style.display = 'none';
        
        if (tabRepo) tabRepo.classList.remove('active');
        if (tabPanel) tabPanel.classList.add('active');
    }
}