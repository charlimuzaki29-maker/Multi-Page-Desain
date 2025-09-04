// Ambil semua elemen yang kita butuhkan dari HTML
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.querySelector("body");

// Tambahkan 'event listener' ke tombol hamburger
// Ini cara modern pengganti 'onclick' di HTML
hamburger.addEventListener('click', () => {
    // Toggle kelas 'active' untuk menampilkan/menyembunyikan menu
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    
    // Toggle kelas 'menu-terbuka' untuk efek blur di body
    body.classList.toggle("menu-terbuka");

    // Ganti ikon hamburger dari ☰ menjadi ✖ (dan sebaliknya)
    if (hamburger.innerHTML === "☰") {
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }
});