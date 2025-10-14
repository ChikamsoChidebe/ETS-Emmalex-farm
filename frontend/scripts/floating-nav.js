// Simple Floating Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    const floatingNav = document.getElementById('mobileFloatingNav');
    
    if (floatingNav) {
        // Force positioning and visibility
        function setupNav() {
            if (window.innerWidth <= 1024) {
                floatingNav.style.display = 'block';
                floatingNav.style.position = 'fixed';
                floatingNav.style.bottom = '20px';
                floatingNav.style.right = '20px';
                floatingNav.style.top = 'auto';
                floatingNav.style.left = 'auto';
                floatingNav.style.zIndex = '999999';
            } else {
                floatingNav.style.display = 'none';
            }
        }
        
        // Check on load and resize
        setupNav();
        window.addEventListener('resize', setupNav);
        
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