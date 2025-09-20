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