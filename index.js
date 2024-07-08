// scripts.js
const aboutUsSection = document.querySelector('.About_us');
const aboutUsHeading = document.querySelector('.about-us-heading');
const banner = document.querySelector(".banner");

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



function checkScroll() {
    if (window.scrollY < 0) {
        banner.classList.add("slide-in");
    } else {
        banner.classList.remove("slide-in");
    }
}

window.addEventListener("scroll", checkScroll);

// Trigger the function on page load in case the page is already at the top
checkScroll();


window.addEventListener('scroll', function() {
    const sectionTop = aboutUsHeading.getBoundingClientRect().top;
    console.log("lll",sectionTop);
    const isInViewport = sectionTop < window.innerHeight && sectionTop >= 80;

    if (isInViewport) {
        aboutUsHeading.classList.add('underline-animate');
    }else{
        aboutUsHeading.classList.remove('underline-animate');

    }
});

