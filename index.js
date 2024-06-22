document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var navLinks = document.getElementById('nav-links');
    var navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


