const words = ["Developer", "Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  const typedElement = document.getElementById("typed");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typedElement.textContent = currentWord;
    }

    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typedElement.textContent = currentWord;
    }

    if (j === words[i].length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
    }
  }

  setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", type);



// ======================
// Scroll Reveal
// ======================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});







// ======================
// Cursor animado
// ======================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
