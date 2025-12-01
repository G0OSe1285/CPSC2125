const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const yearSpan = document.getElementById("copyright-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const heroCarousel = document.querySelector("[data-carousel]");
if (heroCarousel) {
  const slides = heroCarousel.querySelectorAll(".carousel-slide");
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  slides[0].classList.add("active");
  setInterval(showNextSlide, 5000);
}

const bookCarousel = document.querySelector("[data-book-carousel]");
if (bookCarousel) {
  const slides = bookCarousel.querySelectorAll(".book-slide");
  let current = 0;

  function nextBook() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  slides[0].classList.add("active");  
  setInterval(nextBook, 7000);
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

