const nav = document.getElementById("nav");
const menuButton = document.getElementById("menuButton");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", open);
    menuButton.textContent = open ? "×" : "☰";
  });
  document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}

const roleText = document.getElementById("roleText");
if (roleText) {
  const roles = ["Software Developer", "Full-stack Developer", "Web Application Builder"];
  let roleIndex = 0, charIndex = 0, removing = false;
  function typeRole() {
    const role = roles[roleIndex];
    roleText.textContent = removing ? role.slice(0, --charIndex) : role.slice(0, ++charIndex);
    let delay = removing ? 38 : 68;
    if (!removing && charIndex === role.length) { removing = true; delay = 1450; }
    if (removing && charIndex === 0) { removing = false; roleIndex = (roleIndex + 1) % roles.length; delay = 280; }
    setTimeout(typeRole, delay);
  }
  setTimeout(typeRole, 800);
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();