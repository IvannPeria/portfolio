// Theme Toggle Functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    body.classList.add('dark');
}

// Toggle theme and save preference
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Save theme preference to localStorage
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Add a subtle animation to the button
    toggleButton.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        toggleButton.style.transform = 'rotate(0deg)';
    }, 300);
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Optional: Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for scroll animation
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add ripple effect to buttons and interactive elements
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const rippleExists = button.querySelector('.ripple');
    if (rippleExists) {
        rippleExists.remove();
    }

    button.appendChild(ripple);
}

// Add ripple effect CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .theme-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

toggleButton.addEventListener('click', createRipple);

// Console message
console.log('%c👋 Hello! ', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for visiting my portfolio!', 'font-size: 14px; color: #64748b;');