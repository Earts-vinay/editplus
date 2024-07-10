// scripts.js
const aboutUsSection = document.querySelector('.About_us');
const aboutUsHeading = document.querySelector('.about-us-heading');

const whychooseUsSection = document.querySelector('.why-choose-us');
const whychooseUsHeading = document.querySelector('.why-choose-us-heading');

const projectSection = document.querySelector('.project');
const projectheading = document.querySelector('.project-heading');

const ideassection = document.querySelector('.ideas');
const ideasheading = document.querySelector('.ideas-heading');


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

//About Us heading
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

//why-choose-us heading
window.addEventListener('scroll', function() {
    const whychooseUs = whychooseUsHeading.getBoundingClientRect().top;

    console.log("lll",whychooseUs);
    const whychoose = whychooseUs < window.innerHeight && whychooseUs >= 80;

    if (whychoose) {
        whychooseUsHeading.classList.add('whychooseus-underline-animate');
    }else{
        whychooseUsHeading.classList.remove('whychooseus-underline-animate');

    }
});



//projects heading
window.addEventListener('scroll', function() {
    const projects = projectheading.getBoundingClientRect().top;
    const projectk = projects < window.innerHeight && projects >= 80;

    if (projectk) {
        projectheading.classList.add('projects-underline-animate');
    }else{
        projectheading.classList.remove('projects-underline-animate');
    }
});

//ideas heading
window.addEventListener('scroll', function() {
    const ideass = ideasheading.getBoundingClientRect().top;
    const ideask = ideass < window.innerHeight && ideass >= 80;

    if (ideask) {
        ideasheading.classList.add('ideas-underline-animate');
    }else{
        ideasheading.classList.remove('ideas-underline-animate');
    }
});

//lottie icons
//eco-production
document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/icons/eco.json'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('smart-devices'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/icons/smart.json'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('urban'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/icons/car.json'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('green'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/icons/globe.json'
    });
});