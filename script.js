document.addEventListener('DOMContentLoaded', () => {
    
    // Add fade-in classes to elements
    const fadeElements = document.querySelectorAll('.skill-card, .project-card, .section-title, .contact-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight delay based on index for a staggered effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Make blob cursor follower effect subtle
    const blob1 = document.getElementById('blob-bg');
    const blob2 = document.getElementById('blob-bg-2');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Move blobs slightly towards mouse
        if (blob1 && blob2) {
            blob1.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
            blob2.style.transform = `translate(${x * -0.05}px, ${y * -0.05}px)`;
        }
    });

    // Smooth scroll for nav links
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
});
