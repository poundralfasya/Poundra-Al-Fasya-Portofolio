// ============================================
// 1. CYBER BACKEND TYPEWRITER EFFECT
// ============================================
const typedText = document.getElementById('typedText');
const textToType = "Executing: poundra --init --backend-engineer";
let charIndex = 0;

function typeWriterEffect() {
  if (charIndex < textToType.length) {
    if (typedText) {
      typedText.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriterEffect, 40);
    }
  } else {
    setTimeout(simulateTerminalBoot, 300);
  }
}

function simulateTerminalBoot() {
  const terminalBody = document.querySelector('.terminal-body');
  if (terminalBody) {
    const successLine = document.createElement('p');
    successLine.style.color = '#22c55e';
    successLine.style.marginTop = '0.5rem';
    successLine.style.fontSize = '0.8rem';
    successLine.style.fontFamily = "'JetBrains Mono', monospace";
    successLine.innerHTML = "<span class='term-accent'>[SUCCESS]</span> Environment loaded. Ready for PKL 2026.";
    terminalBody.appendChild(successLine);
  }
}

// ============================================
// RUN EVENTS AFTER DOM IS FULLY LOADED
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  
  // --- A. MOBILE MENU (HAMBURGER TOGGLE) ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      
      // Efek animasi rotasi tombol hamburger pas diklik aktif
      if (navMenu.classList.contains('open')) {
        navToggle.style.transform = 'rotate(90deg)';
        navToggle.style.color = '#22c55e';
      } else {
        navToggle.style.transform = 'none';
        navToggle.style.color = '';
      }
    });
  }

  // --- B. FIXED SLIDER PORTFOLIO IMPLEMENTATION ---
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');

  // Tombol Kiri (Mundur)
  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector = btn.getAttribute('data-target');
      moveSlide(targetSelector, -1);
    });
  });

  // Tombol Kanan (Maju)
  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector = btn.getAttribute('data-target');
      moveSlide(targetSelector, 1);
    });
  });

  function moveSlide(containerSelector, direction) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const slides = container.querySelectorAll('.slide-item');
    if (slides.length === 0) return;

    let currentActiveIndex = -1;

    slides.forEach((slide, index) => {
      if (slide.classList.contains('active')) {
        currentActiveIndex = index;
      }
    });

    if (currentActiveIndex === -1) currentActiveIndex = 0;

    slides[currentActiveIndex].classList.remove('active');
    let newActiveIndex = (currentActiveIndex + direction + slides.length) % slides.length;
    slides[newActiveIndex].classList.add('active');
  }

  // Jalankan efek mengetik jika elemen tersedia di halaman
  if (typedText) {
    setTimeout(typeWriterEffect, 500);
  }
});