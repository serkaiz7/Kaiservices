// script.js
// JavaScript for Form Handling and Page Transitions
const form = document.getElementById('opt-in-form');
const hero = document.querySelector('.hero');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate form submission (In production, use AJAX to send data to a backend or Formspree)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Store lead in localStorage (for demo purposes)
    const leads = JSON.parse(localStorage.getItem('leads')) || [];
    leads.push({ name, email, phone });
    localStorage.setItem('leads', JSON.stringify(leads));

    // Transition to Thank You page
    hero.style.display = 'none';
    thankYou.style.display = 'block';

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function bookSession() {
    const date = document.getElementById('booking-date').value;
    if (date) {
        alert(`Your consultation call is booked for ${date}! We'll confirm via email.`);
    } else {
        alert('Please select a date.');
    }
}

// Optional: Add smooth scroll for any internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
