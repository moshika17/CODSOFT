// Dark Mode Toggle
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect
const texts = ["Welcome to My Website", "Building the Future", "Let's Innovate Together"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingElement = document.getElementById("typing-text");

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    typingElement.innerHTML = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}
type();

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
