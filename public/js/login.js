document.addEventListener("DOMContentLoaded", () => {
  // Check if already logged in
  if (localStorage.getItem("token")) {
    window.location.href = "index.html";
    return;
  }

  const loginForm = document.getElementById("login-form");
  const messageBox = document.getElementById("message-box");
  const API_URL = "/api";

  const showMessage = (msg, type) => {
    messageBox.textContent = msg;
    messageBox.className = type === "error" ? "msg-error" : "msg-success";
    messageBox.style.display = "block";
    setTimeout(() => (messageBox.style.display = "none"), 5000);
  };

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("login-btn");
    btn.disabled = true;
    btn.textContent = "Signing in...";

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      // Save token and user details to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      window.location.href = "index.html";
    } catch (error) {
      showMessage(error.message, "error");
      btn.disabled = false;
      btn.textContent = "Sign In";
    }
  });
});
