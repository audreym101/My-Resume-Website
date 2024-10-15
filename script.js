const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
