// Scroll ke hero saat refresh/load
window.addEventListener("load", () => {
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
    }
});

// Navbar hide/show saat scroll
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        navbar.classList.add("hide"); // scroll ke bawah → hide
    } else {
        navbar.classList.remove("hide"); // scroll ke atas → show
    }
    lastScrollY = window.scrollY;
});
