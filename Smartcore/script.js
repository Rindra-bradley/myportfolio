
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const sections = document.querySelectorAll('section');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});


navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const id = link.getAttribute('href');
        const target = document.querySelector(id);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});


//logo//


logoLink.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector("#home").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    navLinks.forEach(l => l.classList.remove('active'));
    navLinks[0].classList.add('active');
});


//ACTIVE LINK ON SCROLL//


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


//SWIPER//


const swiper = new Swiper('.slider-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    speed: 800,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


//typed text//

const texts = [
    "digital agency",
    "web developer",
    "automation builder",
    "UI/UX designer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typedElement = document.getElementById("typed-text");

function typeEffect() {
    if (!typedElement) return;

    const currentText = texts[index];

    if (!isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();