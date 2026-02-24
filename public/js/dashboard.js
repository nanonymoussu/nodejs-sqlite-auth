document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");

  // Route protection: Redirect to login if unauthenticated
  if (!token || !userStr) {
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(userStr);
  const welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.textContent = `Welcome back, ${user.username}!`;

  // Logout Logic
  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });
});
