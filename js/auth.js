/**
 * EduRúbrica — Lógica de las pantallas de autenticación
 * Fase 1: solo interacciones de interfaz (sin backend real todavía).
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
      toggle.setAttribute("aria-label", isHidden ? "Ocultar contraseña" : "Mostrar contraseña");
    });
  });
}

/**
 * Rellena el formulario con credenciales de prueba según el rol de la página.
 * Los valores son ficticios y solo sirven para pruebas de interfaz.
 */
function initDemoCredentials() {
  const studentBtn = document.getElementById("fill-demo-student");
  const teacherBtn = document.getElementById("fill-demo-teacher");

  if (studentBtn) {
    studentBtn.addEventListener("click", () => {
      fillCredentials("student-email", "student-password", "antonia@edurubrica.cl", "Demo1234");
    });
  }

  if (teacherBtn) {
    teacherBtn.addEventListener("click", () => {
      fillCredentials("teacher-email", "teacher-password", "ana.castillo@edurubrica.cl", "Demo1234");
    });
  }
}

function fillCredentials(emailId, passwordId, emailValue, passwordValue) {
  const emailInput = document.getElementById(emailId);
  const passwordInput = document.getElementById(passwordId);

  if (emailInput) emailInput.value = emailValue;
  if (passwordInput) passwordInput.value = passwordValue;
}