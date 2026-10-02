// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#1e293b";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
    }

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.style.display = "none";
    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});


// =========================
// PROJECT BUTTONS
// =========================

const projectButtons =
    document.querySelectorAll(".project-card button");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Project details will be available soon!");

    });

});


// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to my portfolio website!");