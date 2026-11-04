document.addEventListener("DOMContentLoaded", function () {

  // Graband elements
  const welcomeCard = document.getElementById("welcomeCard");
  const loginCard   = document.getElementById("loginCard");
  const errorCard   = document.getElementById("errorCard");

  const actionBtn = document.getElementById("actionBtn");
  const loginForm = document.getElementById("loginForm");
  const backBtn   = document.getElementById("backBtn");
  const retryBtn  = document.getElementById("retryBtn");

  /* ================ SCREAN 1 → SCREAN 2 =============== */
  // No click counting — just navigate to Login
  if (actionBtn) {
    actionBtn.addEventListener("click", function () {
      welcomeCard.classList.add("hidden");
      errorCard.classList.add("hidden");
      loginCard.classList.remove("hidden");
    });
  }

  /* ================ SCREAN 2: Login submit =============== */
  // Always shows the invalid credentials screan (demo behaviour)
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      loginCard.classList.add("hidden");
      welcomeCard.classList.add("hidden");
      errorCard.classList.remove("hidden");
    });
  }

  /* ================ SCREAN 2: Back to Welcome =============== */
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      loginCard.classList.add("hidden");
      errorCard.classList.add("hidden");
      welcomeCard.classList.remove("hidden");

      // Clear the fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    });
  }

  /* ================ SCREAN 3: Retry login =============== */
  if (retryBtn) {
    retryBtn.addEventListener("click", function () {
      errorCard.classList.add("hidden");
      welcomeCard.classList.add("hidden");
      loginCard.classList.remove("hidden");

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    });
  }

});