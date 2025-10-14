// Modern JavaScript for ETS Emmalex Farm Website
// Enhanced user experience with smooth animations and interactions

class ModernWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeAnimations();
    this.setupIntersectionObserver();
    this.initializeCounters();
    this.setupGalleryFilters();
    this.setupMobileMenu();
    this.setupNavbarEffects();
    this.setupSmoothScrolling();
    this.setupParallaxEffects();
    this.setupFormEnhancements();
  }

  setupEventListeners() {
    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.preloadCriticalImages();
      this.setupLazyLoading();
    });

    // Window Load
    window.addEventListener('load', () => {
      this.hidePreloader();
      this.triggerEntryAnimations();
    });

    // Window Resize
    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, 250));

    // Window Scroll
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, 16));
  }

  initializeAnimations() {
    // GSAP Timeline for hero animations
    const heroTl = gsap.timeline({ delay: 0.5 });
    
    heroTl
      .from('.hero-badge', { 
        duration: 0.8, 
        y: 30, 
        opacity: 0, 
        ease: 'power2.out' 
      })
      .from('.hero-title', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power2.out' 
      }, '-=0.4')
      .from('.hero-description', { 
        duration: 0.8, 
        y: 30, 
        opacity: 0, 
        ease: 'power2.out' 
      }, '-=0.6')
      .from('.hero-btn', { 
        duration: 0.6, 
        y: 20, 
        opacity: 0, 
        stagger: 0.2, 
        ease: 'power2.out' 
      }, '-=0.4')
      .from('.hero-stats', { 
        duration: 1, 
        y: 40, 
        opacity: 0, 
        ease: 'power2.out' 
      }, '-=0.2');

    // Scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);

    // Section animations
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      });
    });

    // Product cards animation
    gsap.utils.toArray('.product-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        delay: index * 0.1,
        ease: 'power2.out'
      });
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        delay: index * 0.15,
        ease: 'power2.out'
      });
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Trigger specific animations based on element type
          if (entry.target.classList.contains('stat-number')) {
            this.animateCounter(entry.target);
          }
          
          if (entry.target.classList.contains('gallery-item')) {
            this.animateGalleryItem(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('[data-aos], .stat-number, .gallery-item').forEach(el => {
      observer.observe(el);
    });
  }

  initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + '+';
        } else {
          counter.textContent = Math.floor(current) + '+';
          requestAnimationFrame(updateCounter);
        }
      };
      
      // Store the animation function for later use
      counter.animateCounter = updateCounter;
    });
  }

  animateCounter(element) {
    if (element.animateCounter && !element.hasAnimated) {
      element.animateCounter();
      element.hasAnimated = true;
    }
  }

  setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (!filterBtns.length || !galleryItems.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Animate filter transition
        const tl = gsap.timeline();
        
        // Fade out all items
        tl.to(galleryItems, {
          duration: 0.3,
          opacity: 0,
          scale: 0.8,
          stagger: 0.05,
          ease: 'power2.inOut'
        });
        
        // Filter and fade in relevant items
        tl.call(() => {
          galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
        
        tl.to(galleryItems.filter(item => 
          filter === 'all' || item.getAttribute('data-category') === filter
        ), {
          duration: 0.4,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          ease: 'power2.out'
        });
      });
    });
  }

  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!mobileMenuToggle || !mobileMenu) return;

    mobileMenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const isActive = mobileMenu.classList.contains('active');
      
      if (isActive) {
        // Close menu
        gsap.to(mobileMenu, {
          duration: 0.3,
          opacity: 0,
          y: -20,
          ease: 'power2.inOut',
          onComplete: () => {
            mobileMenu.classList.remove('active');
          }
        });
        mobileMenuToggle.classList.remove('active');
      } else {
        // Open menu
        mobileMenu.classList.add('active');
        mobileMenuToggle.classList.add('active');
        gsap.fromTo(mobileMenu, 
          { opacity: 0, y: -20 },
          { duration: 0.3, opacity: 1, y: 0, ease: 'power2.out' }
        );
      }
    });

    // Prevent menu from closing when clicking inside it
    mobileMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') && 
          !mobileMenuToggle.contains(e.target) && 
          !mobileMenu.contains(e.target)) {
        gsap.to(mobileMenu, {
          duration: 0.3,
          opacity: 0,
          y: -20,
          ease: 'power2.inOut',
          onComplete: () => {
            mobileMenu.classList.remove('active');
          }
        });
        mobileMenuToggle.classList.remove('active');
      }
    });

    // Close menu when clicking on menu links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        gsap.to(mobileMenu, {
          duration: 0.3,
          opacity: 0,
          y: -20,
          ease: 'power2.inOut',
          onComplete: () => {
            mobileMenu.classList.remove('active');
          }
        });
        mobileMenuToggle.classList.remove('active');
      });
    });
  }

  setupNavbarEffects() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    
    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
        
        // Hide/show navbar based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
      } else {
        navbar.classList.remove('scrolled');
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', this.throttle(handleNavbarScroll, 16));
  }

  setupSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 100; // Account for fixed navbar
          
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: offsetTop, autoKill: false },
            ease: 'power2.inOut'
          });
        }
      });
    });
  }

  setupParallaxEffects() {
    // Hero video parallax
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
      gsap.to(heroVideo, {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: '30%',
        ease: 'none'
      });
    }

    // Section backgrounds parallax
    gsap.utils.toArray('.about-image img').forEach(img => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: '20%',
        ease: 'none'
      });
    });
  }

  setupFormEnhancements() {
    // Enhanced form interactions
    const formInputs = document.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
      // Focus animations
      input.addEventListener('focus', () => {
        gsap.to(input, {
          duration: 0.3,
          scale: 1.02,
          boxShadow: '0 0 0 3px rgba(44, 85, 48, 0.1)',
          ease: 'power2.out'
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, {
          duration: 0.3,
          scale: 1,
          boxShadow: '0 0 0 0px rgba(44, 85, 48, 0)',
          ease: 'power2.out'
        });
      });
    });
  }

  animateGalleryItem(item) {
    gsap.from(item, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      scale: 0.9,
      ease: 'power2.out'
    });
  }

  preloadCriticalImages() {
    const criticalImages = [
      'assets/landing_page/Donkeys-960x640.jpg',
      'assets/landing/jacques-bopp-tE2rnQHjdv8-unsplash.jpg',
      'assets/landing/cocoa1.JPG'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      gsap.to(preloader, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => preloader.remove()
      });
    }
  }

  triggerEntryAnimations() {
    // Trigger any entry animations that should happen after page load
    document.body.classList.add('loaded');
  }

  handleResize() {
    // Handle responsive adjustments
    this.updateViewportHeight();
  }

  handleScroll() {
    // Handle scroll-based effects
    this.updateScrollProgress();
  }

  updateViewportHeight() {
    // Update CSS custom property for mobile viewport height
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  updateScrollProgress() {
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress);
  }

  // Utility functions
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Enhanced Swiper Configuration
class ModernSwiper {
  constructor() {
    this.initTestimonials();
  }

  initTestimonials() {
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      effect: 'slide',
      speed: 600,
      on: {
        slideChange: function() {
          // Add custom animations on slide change
          gsap.from('.swiper-slide-active .testimonial-card', {
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
          });
        }
      }
    });
  }
}

// Performance Monitoring
class PerformanceMonitor {
  constructor() {
    this.measurePerformance();
  }

  measurePerformance() {
    // Measure and log performance metrics
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        console.log(`Page load time: ${loadTime}ms`);
        
        // Send to analytics if needed
        this.sendPerformanceData({
          loadTime,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
        });
      }, 0);
    });
  }

  sendPerformanceData(data) {
    // Send performance data to analytics service
    // This would typically be sent to Google Analytics, etc.
    console.log('Performance data:', data);
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ModernWebsite();
  new ModernSwiper();
  new PerformanceMonitor();
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ModernWebsite, ModernSwiper, PerformanceMonitor };
}