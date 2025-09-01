// Typing effect en el nombre
const nameElement = document.getElementById("typing-name");
const nameText = nameElement.textContent;
nameElement.textContent = "";
let i = 0;

function typing() {
  if (i < nameText.length) {
    nameElement.textContent += nameText.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Reveal sections al hacer scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      r.classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
