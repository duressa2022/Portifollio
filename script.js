// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement ? targetElement.offsetTop - 60 : 0, // Adjusted offset for mobile
            behavior: 'smooth'
        });
    });
});

// CTA Button Click - Opens Email Client
document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = 'mailto:duressashukuri2022@gmail.com';
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    darkModeToggle.textContent = '🌙';
} else {
    body.removeAttribute('data-theme');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Duplicate Project and Research Cards
const projectCards = document.getElementById('project-cards');
const projectContent = projectCards.innerHTML;
projectCards.innerHTML += projectContent;

const researchCards = document.getElementById('research-cards');
const researchContent = researchCards.innerHTML;
researchCards.innerHTML += researchContent;