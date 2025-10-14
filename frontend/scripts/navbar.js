// Modern Navigation Elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Navbar Scroll Effect - Keep navbar always visible
window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Mobile Menu Toggle
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }
    if (mobileMenuToggle) {
      mobileMenuToggle.classList.remove('active');
    }
  });
});

// Ensure navbar stays visible
if (navbar) {
  navbar.style.position = 'fixed';
  navbar.style.top = '0';
  navbar.style.left = '0';
  navbar.style.right = '0';
  navbar.style.zIndex = '1000';
}