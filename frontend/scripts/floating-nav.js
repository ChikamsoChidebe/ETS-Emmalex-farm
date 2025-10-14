// Simple Floating Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    const floatingNav = document.getElementById('mobileFloatingNav');
    
    if (floatingNav) {
        // Ensure floating nav is visible on mobile
        function checkMobile() {
            if (window.innerWidth <= 1024) {
                floatingNav.style.display = 'block';
            } else {
                floatingNav.style.display = 'none';
            }
        }
        
        // Check on load and resize
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
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