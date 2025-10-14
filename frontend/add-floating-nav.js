// Script to add floating navigation to all pages
const pages = [
    'pages/service.html',
    'pages/contact-us.html', 
    'pages/booking.html'
];

const floatingNavHTML = `
        <div class="mobile-floating-nav" id="mobileFloatingNav">
            <div class="floating-nav-content">
                <a href="../index.html" class="floating-nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="service.html" class="floating-nav-item">
                    <i class="fas fa-cogs"></i>
                    <span>Services</span>
                </a>
                <a href="about-us.html" class="floating-nav-item">
                    <i class="fas fa-info-circle"></i>
                    <span>About</span>
                </a>
                <a href="contact-us.html" class="floating-nav-item">
                    <i class="fas fa-phone"></i>
                    <span>Contact</span>
                </a>
                <a href="booking.html" class="floating-nav-item floating-nav-cta">
                    <i class="fas fa-calendar-check"></i>
                    <span>Book</span>
                </a>
            </div>
        </div>`;

console.log('Add this floating navigation HTML to all pages before closing </nav> tag:');
console.log(floatingNavHTML);