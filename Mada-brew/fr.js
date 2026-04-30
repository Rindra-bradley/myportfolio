const menuOpenButton = document.querySelector("#open-btn");
const menuCloseButton = document.querySelector("#close-btn");
const body = document.body;
const navLinks = document.querySelectorAll(".nav-menu .link");


menuOpenButton.addEventListener("click", () => {
    body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = link.getAttribute("href");
        const target = document.querySelector(id);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        body.classList.remove("show-mobile-menu");
    });
});


const contactBtn = document.querySelector(".contact-us");

if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}


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