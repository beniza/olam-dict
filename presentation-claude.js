// presentation-claude.js

// ===== STATE MANAGEMENT =====
let currentSlide = 0;
let totalSlides = 0;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initializeSlides();
  setupKeyboardNavigation();
  setupHashNavigation();
  updateProgress();
});

// ===== SLIDE MANAGEMENT =====
function initializeSlides() {
  const slides = document.querySelectorAll('.slide');
  totalSlides = slides.length;
  
  // Show first slide
  if (slides.length > 0) {
    slides[0].classList.add('active');
  }
  
  // Update slide counter
  updateSlideCounter();
  
  // Update button states
  updateNavigationButtons();
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  
  if (index < 0 || index >= totalSlides) {
    return;
  }
  
  // Remove active class from all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Add active class to target slide
  slides[index].classList.add('active');
  
  // Update current slide
  currentSlide = index;
  
  // Update UI
  updateSlideCounter();
  updateNavigationButtons();
  updateProgress();
  updateHash();
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    showSlide(currentSlide + 1);
  }
}

function previousSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

// ===== UI UPDATES =====
function updateSlideCounter() {
  const currentSlideEl = document.getElementById('current-slide');
  const totalSlidesEl = document.getElementById('total-slides');
  
  if (currentSlideEl) {
    currentSlideEl.textContent = currentSlide + 1;
  }
  
  if (totalSlidesEl) {
    totalSlidesEl.textContent = totalSlides;
  }
}

function updateNavigationButtons() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (prevBtn) {
    prevBtn.disabled = currentSlide === 0;
  }
  
  if (nextBtn) {
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }
}

function updateProgress() {
  const progressFill = document.getElementById('progress');
  if (progressFill && totalSlides > 0) {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
  }
}

function updateHash() {
  const slides = document.querySelectorAll('.slide');
  const currentSlideElement = slides[currentSlide];
  
  if (currentSlideElement) {
    const slideNumber = currentSlideElement.getAttribute('data-slide');
    if (slideNumber) {
      window.location.hash = `slide-${slideNumber}`;
    }
  }
}

// ===== KEYBOARD NAVIGATION =====
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ': // Space bar
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        previousSlide();
        break;
      case 'Home':
        e.preventDefault();
        showSlide(0);
        break;
      case 'End':
        e.preventDefault();
        showSlide(totalSlides - 1);
        break;
    }
  });
}

// ===== HASH NAVIGATION =====
function setupHashNavigation() {
  // Check for hash on load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // Remove #
    const match = hash.match(/slide-(\d+)/);
    
    if (match) {
      const slideNumber = parseInt(match[1]);
      const targetIndex = slideNumber - 1;
      
      if (targetIndex >= 0 && targetIndex < totalSlides) {
        showSlide(targetIndex);
      }
    }
  }
  
  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const match = hash.match(/slide-(\d+)/);
    
    if (match) {
      const slideNumber = parseInt(match[1]);
      const targetIndex = slideNumber - 1;
      
      if (targetIndex >= 0 && targetIndex < totalSlides) {
        showSlide(targetIndex);
      }
    }
  });
}

// ===== UTILITY FUNCTIONS =====
function goToSlide(slideNumber) {
  const index = slideNumber - 1;
  if (index >= 0 && index < totalSlides) {
    showSlide(index);
  }
}

// Export functions for button onclick handlers
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide;
