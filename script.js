// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  /* ================ WELCOME BUTTON =============== */
  // Click the button → hide welcome, show login
  const actionBtn = document.getElementById("actionBtn");
  const welcomeCard = document.getElementById("welcomeCard");
  const loginCard   = document.getElementById("loginCard");
  const output      = document.getElementById("output");

  if (actionBtn) {
    actionBtn.addEventListener("click", function () {
      output.innerText = "You clicked me! Loading login page...";
      output.style.color = "#1e3a8a";

      // Small delay for feedback, then switch views
      setTimeout(function () {
        welcomeCard.classList.add("hidden");
        loginCard.classList.remove("hidden");
      }, 400);
    });
  }

  /* ================ LOGIN FORM =============== */
  const loginForm   = document.getElementById("loginForm");
  const loginOutput = document.getElementById("loginOutput");
  const backBtn     = document.getElementById("backBtn");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      // Prevent page reload
      event.preventDefault();
      event.stopPropagation();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Basic validation
      if (username === "" || password === "") {
        loginOutput.innerText = "Kripaya username and password rendu ivvandi.";
        loginOutput.classList.add("error");
        return;
      }

      // Simulated login check (replace with real API call later)
      if (username === "admin" && password === "1234") {
        loginOutput.classList.remove("error");
        loginOutput.innerText = "Login successful! Welcome, " + username + ".";
        loginOutput.style.color = "#22c55e";
      } else {
        loginOutput.classList.add("error");
        loginOutput.innerText = "Invalid username or password. Try admin / 1234.";
      }
    });
  }

  /* ================ BACK BUTTON =============== */
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      // Return to welcome view
      loginCard.classList.add("hidden");
      loginOutput.innerText = "";
      loginOutput.classList.remove("error");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      welcomeCard.classList.remove("hidden");
    });
  }

});