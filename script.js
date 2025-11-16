// script.js - interactions for BYD Gresik demo
document.getElementById('year').textContent = new Date().getFullYear();

const hambtn = document.getElementById('hambtn');
const mainNav = document.getElementById('mainNav');
hambtn && hambtn.addEventListener('click', () => {
  mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
});

// WhatsApp quick link
const phone = '6287736861540'; // Indonesia country code + number (remove leading 0)
const whatsBtn = document.getElementById('whatsBtn');
if (whatsBtn) {
  const text = encodeURIComponent('Halo, saya tertarik dengan promo BYD ATTO 1. Mohon info & simulasi kredit.');
  whatsBtn.href = `https://wa.me/${phone}?text=${text}`;
}

// Basic contact form handling (local demo)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    if (!name || !phoneInput) {
      document.getElementById('formMsg').textContent = 'Nama dan telepon harus diisi.';
      return;
    }
    document.getElementById('formMsg').textContent = 'Terima kasih! Permintaan Anda telah terkirim. Sales akan menghubungi dalam 1x24 jam.';
    form.reset();
  });
}
// --- SLIDER ---
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;
// AUTO SLIDE EVERY 2 SECONDS
setInterval(() => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 2000);
// generate dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(i) {
  slides.forEach(sl => sl.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

nextBtn.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

prevBtn.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    showSlide(index);
  };
});
