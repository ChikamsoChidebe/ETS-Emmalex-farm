// Enhanced Floating Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    const floatingNav = document.getElementById('mobileFloatingNav');
    
    if (floatingNav) {
        // Force positioning and visibility with aggressive styling
        function setupNav() {
            if (window.innerWidth <= 1024) {
                // Remove any existing classes that might interfere
                floatingNav.className = 'mobile-floating-nav';
                
                // Force inline styles to override everything
                floatingNav.style.cssText = `
                    position: fixed !important;
                    bottom: 20px !important;
                    right: 20px !important;
                    top: auto !important;
                    left: auto !important;
                    width: auto !important;
                    height: auto !important;
                    display: block !important;
                    z-index: 999999 !important;
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(20px) !important;
                    border-radius: 16px !important;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    padding: 12px !important;
                    transform: none !important;
                    margin: 0 !important;
                `;
                
                console.log('Mobile floating nav positioned at bottom-right');
            } else {
                floatingNav.style.display = 'none';
            }
        }
        
        // Check on load and resize
        setupNav();
        window.addEventListener('resize', setupNav);
        
        // Force positioning every 100ms for the first 2 seconds to ensure it sticks
        let attempts = 0;
        const forcePosition = setInterval(() => {
            if (attempts < 20 && window.innerWidth <= 1024) {
                setupNav();
                attempts++;
            } else {
                clearInterval(forcePosition);
            }
        }, 100);
        
        // Add active state to current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = floatingNav.querySelectorAll('.floating-nav-item');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href.includes(currentPage) || (currentPage === '' && href.includes('index.html')))) {
                link.classList.add('active');
            }
        });
    }
});

// Additional check to ensure navigation stays in position
window.addEventListener('scroll', function() {
    const floatingNav = document.getElementById('mobileFloatingNav');
    if (floatingNav && window.innerWidth <= 1024) {
        // Ensure it stays fixed during scroll
        floatingNav.style.position = 'fixed';
        floatingNav.style.bottom = '20px';
        floatingNav.style.right = '20px';
    }
});