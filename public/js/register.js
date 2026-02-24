document.addEventListener("DOMContentLoaded", () => {
  // Check if already logged in
  if (localStorage.getItem("token")) {
    window.location.href = "index.html";
    return;
  }

  const registerForm = document.getElementById("register-form");
  const messageBox = document.getElementById("message-box");
  const API_URL = "/api";

  const showMessage = (msg, type) => {
    messageBox.textContent = msg;
    messageBox.className = type === "error" ? "msg-error" : "msg-success";
    messageBox.style.display = "block";
    setTimeout(() => (messageBox.style.display = "none"), 5000);
  };

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("register-btn");
    btn.disabled = true;
    btn.textContent = "Signing up...";

    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Registration failed");

      showMessage("Registration successful! Redirecting to login...", "success");
      registerForm.reset();

      // Redirect to login after brief delay
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } catch (error) {
      showMessage(error.message, "error");
      btn.disabled = false;
      btn.textContent = "Sign Up";
    }
  });
});
