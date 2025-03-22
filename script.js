// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement ? targetElement.offsetTop - 80 : 0,
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

// Set dark mode as default if no preference is saved
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    darkModeToggle.textContent = '🌙'; // Moon icon to switch to dark
} else {
    body.removeAttribute('data-theme'); // Default to dark (no attribute needed)
    darkModeToggle.textContent = '☀️'; // Sun icon to switch to light
}

darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme'); // Switch to dark
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light'); // Switch to light
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Duplicate Project Cards for Seamless Loop
const projectCards = document.getElementById('project-cards');
const projectContent = projectCards.innerHTML;
projectCards.innerHTML += projectContent;

// Duplicate Research Cards for Seamless Loop
const researchCards = document.getElementById('research-cards');
const researchContent = researchCards.innerHTML;
researchCards.innerHTML += researchContent;