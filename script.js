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
/* DOT INDICATOR */
.slider-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
}

.slider-dot {
  width: 10px;
  height: 10px;
  background: #777;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
}

.slider-dot.active {
  background: #00e6a8;
  transform: scale(1.3);
}
// =========================
// AUTOPLAY SLIDER FOR BYD
// =========================

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Set posisi awal
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
  });
}

// Auto slide 2 detik
setInterval(nextSlide, 2000);
