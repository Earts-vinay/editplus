// scripts.js

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector(".banner");
    banner.style.animation = "slide-in 1s ease-out forwards";
});


