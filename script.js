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

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const isActive = menu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  menu.setAttribute('aria-hidden', isActive ? 'false' : 'true');
});

/* opcional: fechar o menu ao clicar fora (user-friendly) */
document.addEventListener('click', (e) => {
  const insideMenu = menu.contains(e.target) || menuToggle.contains(e.target);
  if (!insideMenu && menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }
});



(function () {
    emailjs.init("Mwhp0_m_0GzWTTN2r");
  })();

  document.getElementById("contato").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_m2882im",
      "template_esvcqg8",
      this
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      this.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao enviar mensagem!");
    });
  });






