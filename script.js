// Portfolio JavaScript

console.log("Welcome to Kartik's Portfolio!");

alert("Welcome to my Personal Portfolio Website!");
// Portfolio Welcome Message

function welcomeUser() {
    let userName = prompt("Please enter your name:");

    if (userName !== null && userName.trim() !== "") {
        alert("Welcome " + userName + "! Thanks for visiting my portfolio.");
    } else {
        alert("Welcome to Kartik's Portfolio!");
    }
}

welcomeUser();
// Display Current Year

let currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;
// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all the fields!");
            return;
        }

        alert(`Thank you ${name}! Your message has been received.`);

        contactForm.reset();

    });

}


const emailInput = document.querySelector("#email");

if (emailInput) {

    emailInput.addEventListener("input", function () {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = "green";
        } else {
            emailInput.style.borderColor = "red";
        }

    });

}

// Phone Number Validation
const phoneInput = document.querySelector("#phone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        const phonePattern = /^[0-9]{10}$/;

        if (phonePattern.test(phoneInput.value)) {
            phoneInput.style.borderColor = "green";
        } else {
            phoneInput.style.borderColor = "red";
        }

    });

}