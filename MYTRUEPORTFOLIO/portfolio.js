const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const sections = document.querySelectorAll("section");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

logoLink?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector("#home")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


const portfolioBtns = document.querySelectorAll('.portfolio-btn');

portfolioBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');

        portfolioBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        portfolioDetails.forEach(detail => detail.classList.remove('active'));
        portfolioDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

let index = 0;

const projectDetails = document.querySelectorAll('.project-detail');
const total = projectDetails.length;

const activeProject = () => {
    const imgSlide = document.querySelector('.project-box-item .img-slide');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 20}px))`;

    projectDetails.forEach(detail => detail.classList.remove('active'));
    projectDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < total - 1) {
        index++;
    }

    arrowLeft.classList.remove('disabled');
    arrowRight.classList.toggle('disabled', index === total - 1);

    activeProject();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    }

    arrowRight.classList.remove('disabled');
    arrowLeft.classList.toggle('disabled', index === 0);

    activeProject();
});



const form = document.getElementById("contact-form");
let isSending = false;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isSending) return;
    isSending = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const text =
        `Hello, I am ${name}
         Email: ${email}

         Subject: ${subject}

        Message:
        ${message}`;

    const success = document.getElementById("success");

    try {
        success.innerText = "Sending...";
        success.style.color = "#aaa";


        await fetch("/", {
            method: "POST",
            body: new FormData(form)
        });


        window.open(
            `https://wa.me/261383163240?text=${encodeURIComponent(text)}`,
            "_blank"
        );


        window.open(
            `mailto:rindrabradley309@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`,
            "_blank"
        );

        success.innerText = "Message sent ✔";
        success.style.color = "#00ff88";

        form.reset();

        setTimeout(() => {
            success.innerText = "";
            isSending = false;
        }, 2500);

    } catch (error) {
        console.error(error);
        success.innerText = "Error sending message ❌";
        success.style.color = "red";
        isSending = false;
    }
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