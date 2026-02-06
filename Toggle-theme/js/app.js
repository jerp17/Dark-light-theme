const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme when page opens
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Button click event
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Check current mode
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});