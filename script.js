// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement ? targetElement.offsetTop - 60 : 0,
            behavior: 'smooth'
        });
        // Close menu on mobile after clicking a link
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
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

// Duplicate Project and Research Cards (Desktop Only)
const projectCards = document.getElementById('project-cards');
const researchCards = document.getElementById('research-cards');

function duplicateCards() {
    if (window.innerWidth > 768) {
        projectCards.innerHTML += projectCards.innerHTML;
        researchCards.innerHTML += researchCards.innerHTML;
    }
}

// Run on load
duplicateCards();

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        // Reset to original content on mobile
        projectCards.innerHTML = projectCards.innerHTML.slice(0, projectCards.innerHTML.length / 2);
        researchCards.innerHTML = researchCards.innerHTML.slice(0, researchCards.innerHTML.length / 2);
    } else {
        // Duplicate only if not already duplicated
        if (projectCards.children.length === 5) { // Original number of project cards
            projectCards.innerHTML += projectCards.innerHTML;
        }
        if (researchCards.children.length === 3) { // Original number of research cards
            researchCards.innerHTML += researchCards.innerHTML;
        }
    }
});

// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});