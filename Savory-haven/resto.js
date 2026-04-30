
const navLinks = document.querySelectorAll('.header .header-menu a');
const logoLink = document.querySelector('.header-title');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.header .header-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});


navLinks.forEach((link) => {

    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = link.getAttribute('href');
        const target = document.querySelector(id);

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

logoLink.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector("#home").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


ScrollReveal({
    reset: true,
    delay: 300,
    distance: '60px',
    duration: 1500,
});
ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.description', {
    delay: 600,
    duration: 2500
});

ScrollReveal().reveal('.home-title');
ScrollReveal().reveal('.home-image', {
    origin: 'right'
});
ScrollReveal().reveal('.home-btn', {
    delay: 600
});

ScrollReveal().reveal('.menu-card', {
    interval: 300
});

ScrollReveal().reveal('.about-img', {
    delay: 900,
    origin: 'left'
});
ScrollReveal().reveal('.about-stat', {
    interval: 300,
    delay: 1200
});
ScrollReveal().reveal('.about .pr-btn', {
    duration: 3000,
    delay: 1200
});

ScrollReveal().reveal('.service-card', {
    duration: 3000,
    interval: 300
});
ScrollReveal().reveal('.contact-info-item', {
    interval: 300,
    delay: 1200
});
ScrollReveal().reveal('.contact-form', {
    duration: 3000,
    delay: 1800
});

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLinks[index]) {
                navLinks[index].classList.add("active");
            }
        }
    });
});