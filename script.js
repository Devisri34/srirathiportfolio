// ===============================
// DARK / LIGHT THEME
// ===============================

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("show");

});

// ===============================
// TYPING EFFECT
// ===============================

const typing = document.querySelector(".typing");

const words = [

    "Aspiring Biotechnologist",
    "Research Enthusiast",
    "Molecular Biology",
    "Zebrafish Researcher"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll("section");

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});