document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to skill items on hover
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });
    });

    // Reveal animations on scroll
    function revealOnScroll() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 150) {
                section.classList.add('visible');
            }
        });
    }

    // Add visible class to sections when they come into view
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once on page load

    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightEl = document.querySelector('footer p');
    if (copyrightEl) {
        copyrightEl.textContent = copyrightEl.textContent.replace('2023', currentYear);
    }
}); 