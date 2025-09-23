/**
 * Shows a page with the given ID and updates the navigation accordingly.
 * @param {string} pageId - The ID of the page to show.
 */
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Find and activate corresponding nav link
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you within 24 hours.`);
    event.target.reset();
}

function subscribeNewsletter(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('newsletter-email');

    // Simulate newsletter subscription
    alert(`Thank you! ${email} has been subscribed to our newsletter. You'll receive updates about our rescue efforts, success stories, and upcoming events.`);
    event.target.reset();
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    // Add some interactive effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Hide the navigation menu by default on page load
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        nav.style.display = 'none'; // Hide the menu on page load
    }
});

// When the menu toggle is clicked
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open'); // Toggle the icon
    nav.classList.toggle('open'); // Toggle the menu visibility
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none'; // Toggle the menu's visibility
});

function animateCounter(el, target, suffix = '', duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // approx 60fps
    const update = () => {
        start += increment;
        if (start < target) {
            el.textContent = Math.floor(start).toLocaleString() + suffix;
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString() + suffix;
        }
    };
    update();
}

function startCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        animateCounter(counter, target, suffix);
    });
}

// Optional: Animate only when in view
const section = document.querySelector('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.disconnect(); // Run once
        }
    });
}, { threshold: 0.4 });

observer.observe(section);
